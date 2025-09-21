'use strict';
const $ = x => document.getElementById(x);

const jsConsole = {};
jsConsole.ui = $("consoleUI");
jsConsole.log = function (text) {
  this.ui.textContent += `${text}\n`;
  this.ui.scrollTop = ui.scrollHeight;
};
jsConsole.clear = function(){
  this.ui.innerHTML = "";
  this.ui.scrollTop = this.ui.scrollHeight;
  $("input").value = "";
};

const myCodeMirror = CodeMirror.fromTextArea($("code"), {
  mode: 'javascript',
  indentUnit: 2,
  lineNumbers: true,
  spellcheck: false,
  autocorrect: false,
  autocapitalize: false,
  allowDropFileTypes: ['text/javascript','application/json']
});

myCodeMirror.setOption("extraKeys", {
  Tab: function(cm) {
    const spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
    cm.replaceSelection(spaces);
  }
});

myCodeMirror.on("change", (e) => {
  $('input').value = myCodeMirror.getValue();
});

$("evalButton").onclick = function() {
  const script = document.createElement("script");
  script.textContent = `console.log("Script executed immediately");`;
  document.head.appendChild(script);
};

$("clearButton").onclick = () => {
  myCodeMirror.setValue('');
  jsConsole.clear();
};

const fileInput = $("file");
fileInput.accept = "text/javascript, application/json";
fileInput.addEventListener("change", async () => {
  let textContent;
  for await (const file of fileInput.files) {
    if (!file) break;
    textContent += await file.text();
  }
  textContent = textContent.replace(/^undefined/,'');
  myCodeMirror.setValue(textContent);
});
