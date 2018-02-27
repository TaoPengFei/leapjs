/* global CodeMirror */
var JSEditor = CodeMirror.fromTextArea(document.getElementById('js'), {
  lineNumbers: true,
  lineWrapping: true,
  styleActiveLine: true,
  indentUnit: 4, // theme: "ambiance",
  mode: {name: 'javascript', globalVars: true},
  extraKeys: {'Ctrl-Q': 'autocomplete'},
  gutters: ['CodeMirror-lint-markers'],
  lint: true
})

JSEditor.setSize('auto', 'auto')

function iframeHtml () {
  var html = ''
  var js = JSEditor.getValue()

  html += '<html>\n'
  html += '<body style="margin:0">\n'
  html += '<script src="LLEG.js"></script>\n'
  html += '<script>'
  html += js
  html += '</script>\n'
  html += '</body>\n'
  return html
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
}

function load (file) {
  $.ajax({
    type: 'get',
    url: file,
    dataType: 'text',
    success: function (content) {
      JSEditor.setValue(content)
      submit()
    }
  })
}

$(function () {
  $('li a').click(function (e) {
    e.preventDefault()
    var link = $(this).attr('href')
    load(link)
  })
})

load('./examples/animations/animation.js')
