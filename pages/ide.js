let current_ide_key = "_ide_key_1.js";

function loadFile (key) {
  current_ide_key = key;
  let content = localStorage.getItem(key) || "";
  JSEditor.setValue(content);
  JSEditor.gotoLine(1);
  submit()
}

function submit () {
  var el = document.getElementsByTagName('iframe')[0]
  el.parentNode.removeChild(el)

  var iframe = document.createElement('iframe')
  document.querySelector('div#output').appendChild(iframe)

  var iframeDoc = iframe.contentDocument

  iframeDoc.open()
  iframeDoc.write(iframeHtml())
  iframeDoc.close()

  iframe.focus()
  localStorage.setItem(current_ide_key, JSEditor.getValue());
}
