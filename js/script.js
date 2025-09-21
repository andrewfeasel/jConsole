const $id = x => document.getElementById(x);

const jsConsole = {};
jsConsole.ui = $id("consoleUI");
jsConsole.log = function (text) {
  this.ui.textContent += `${text}\n`;
  this.ui.scrollTop = ui.scrollHeight;
};
jsConsole.clear = function(){
  this.ui.innerHTML = "";
  this.ui.scrollTop = this.ui.scrollHeight;
  $id("input").value = "";
};

const myCodeMirror = CodeMirror.fromTextArea($id("code"), {
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
  $id('input').value = myCodeMirror.getValue();
});

$id("evalButton").onclick = function() {
  const script = document.createElement("script");
  script.textContent = $id("input").value;
  document.head.appendChild(script);
};

$id("clearButton").onclick = () => {
  myCodeMirror.setValue('');
  jsConsole.clear();
};

const fileInput = $id("file");
fileInput.accept = "text/javascript, application/json";
fileInput.addEventListener("change", async () => {
  let textContent;
  for await (const file of fileInput.files) {
    if (!file) break;
    textContent += await file.text() + "\n";
  }
  myCodeMirror.setValue(textContent);
});
