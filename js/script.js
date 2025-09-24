const console_log = console.log;
const $id = x => document.getElementById(x);

const input = $id("input");

const jConsole = {};
jConsole.ui = $id("consoleUI");
jConsole.log = function (text) {
  this.ui.textContent += `${text}\n`;
  this.ui.scrollTop = this.ui.scrollHeight;
};
jConsole.clear = function(){
  this.ui.innerHTML = "";
  this.ui.scrollTop = this.ui.scrollHeight;
  input.value = "";
};

console.log = function(text) {
  jConsole.log(text);
}

const mirror = CodeMirror.fromTextArea($id("code"), {
  mode: 'javascript',
  indentUnit: 2,
  lineNumbers: true,
  spellcheck: false,
  autocorrect: false,
  autocapitalize: false,
  allowDropFileTypes: ['text/javascript','application/json']
});

mirror.setOption("extraKeys", {
  Tab: function(cm) {
    const spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
    cm.replaceSelection(spaces);
  }
});

mirror.on("change", (e) => {
  input.value = mirror.getValue();
});

$id("evalButton").onclick = function() {
  const script = document.createElement("script");
  script.textContent = input.value;
  document.head.appendChild(script);
};

$id("clearButton").onclick = () => {
  mirror.setValue("");
  jConsole.clear();
};

const fileInput = $id("file");
fileInput.accept = "text/javascript, application/json";
fileInput.addEventListener("change", async () => {
  let textContent;
  for await (const file of fileInput.files) {
    if (!file) break;
    textContent += await file.text() + "\n";
  }
  mirror.setValue(textContent);
});
