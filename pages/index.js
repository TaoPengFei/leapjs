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
  html += '<body>\n'
  html += '<script src="../LLEG.js"></script>\n'
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
    var link = $(this).attr('href')
    if(link.slice(-2) === 'js'){
      e.preventDefault()
      load(link)
    }
  })
  
let header = 
'\
<nav class="navbar sticky-top navbar-expand-lg navbar-light" style="background-color: #ff9c0f;">\
  <a class="navbar-brand" href="../">LeapLearner</a>\
    <ul class="navbar-nav">\
      <li class="nav-item dropdown">\
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
          参考手册\
        </a>\
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">\
\
          <a class="dropdown-item" href="methods.html">绘图函数</a>\
          <a class="dropdown-item" href="shapes.html">简单图形</a>\
\
          <a class="dropdown-item" href="styles.html">参考样式</a>\
          <a class="dropdown-item" href="canvas.html">画布方法</a>\
          <a class="dropdown-item" href="events.html">事件</a>\
          <a class="dropdown-item" href="animations.html">动画效果</a>\
          <a class="dropdown-item" href="physics.html">物理效果</a>\
\
        </div>\
      </li>\
      <li class="nav-item dropdown">\
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
          JS语法\
        </a>\
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">\
\
          <a class="dropdown-item" href="#">变量</a>\
          <a class="dropdown-item" href="#">对象</a>\
\
          <a class="dropdown-item" href="#">数组</a>\
          <a class="dropdown-item" href="#">循环</a>\
          <a class="dropdown-item" href="#">函数</a>\
          <a class="dropdown-item" href="#">类</a>\
\
        </div>\
      </li>\
      <a class="nav-link active" href="projects.html">项目合辑</a>\
      <a class="nav-link active" href="games.html">游戏合辑</a>\
    </ul>\
</nav>\
';
let footer = 

'\
<nav class="navbar sticky-bottom navbar-expand-lg navbar-dark bg-dark">\
  <span class="navbar-brand mb-0 h1">友情链接</span>\
  <div class="collapse navbar-collapse">\
    <div class="navbar-nav">\
      <a class="nav-item nav-link disabled" target="_blank" href="https://www.leaplearner.com">官网</a>\
      <a class="nav-item nav-link disabled" target="_blank" href="https://code.leaplearner.com" target="_blank">在线IDE</a>\
      <a class="nav-item nav-link disabled" target="_blank" href="http://cs.leaplearner.com">cs链接</a>\
      <!-- <a class="nav-item nav-link disabled" href="#">Disabled</a> -->\
    </div>\
  </div>\
</nav>\
'
  $("header").html(header);
  $("footer").html(footer);
})

load('../examples/index.js')
