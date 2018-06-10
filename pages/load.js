var JSEditor;

function iframeHtml () {
  var html = ''
  var text = JSEditor.getValue();
   
  html += `
  <html>
  <body>
    <script src="../LLEG.js"></script>
    <script>
      let _logY = 0;
      const _log = console.log;
      function _to2(n){ return n<10 ? "0"+n : n};
      function _to3(n){ 
        if(n<10) return "00" + n;
        if(n<100) return "0" + n;
        return n;
      }
      console.log = function(obj){
        a = new Date(); 
        str = [_to2(a.getHours()), _to2(a.getMinutes()), _to2(a.getSeconds())].join(":")  
        + "." + _to3(a.getMilliseconds()) + " " + JSON.stringify(obj);
        text(str, 10, 10 + 20 * _logY++);
        _log(obj);
      }
    </script>
    <script>
  `;

  html += text

  html += `
    </script>
  </body>
  `;
  return html
}

function loadFile (file) {
  $.ajax({
    type: 'get',
    url: file,
    dataType: 'text',
    success: function (content) {
      JSEditor.setValue(content);
      JSEditor.gotoLine(1);
      submit()
    }
  })
}

$(function () {
  $('li a').click(function (e) {
    var link = $(this).attr('href')
    if(link.slice(-2) === 'js'){
      e.preventDefault()
      loadFile(link)
    }
  })
})
  
let header = `
<nav class="navbar sticky-top navbar-expand-lg navbar-light" style="background-color: #ff9c0f;">
  <a class="navbar-brand" href="../">LeapLearner</a>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          参考手册
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="methods.html">绘图函数</a>
          <a class="dropdown-item" href="shapes.html">简单图形</a>
          <a class="dropdown-item" href="styles.html">参考样式</a>
          <a class="dropdown-item" href="canvas.html">画布方法</a>
          <a class="dropdown-item" href="events.html">事件</a>
          <a class="dropdown-item" href="animations.html">动画效果</a>
          <a class="dropdown-item" href="physics.html">物理效果</a>
        </div>
      </li>
      <a class="nav-link active" href="../JSTuturial/index.html">JS教程</a>
      <a class="nav-link active" href="projects.html">项目合辑</a>
      <a class="nav-link active" href="games.html">游戏合辑</a>
      <a class="nav-link active" href="ide.html">在线IDE</a>
    </ul>
</nav>
`;

let footer = `
<nav class="navbar sticky-bottom navbar-expand-lg navbar-dark bg-dark">
  <span class="navbar-brand mb-0 h1">友情链接</span>
  <div class="collapse navbar-collapse">
    <div class="navbar-nav">
      <a class="nav-item nav-link disabled" target="_blank" href="https://www.leaplearner.com">官网</a>
      <a class="nav-item nav-link disabled" target="_blank" href="https://code.leaplearner.com" target="_blank">在线IDE</a>
      <a class="nav-item nav-link disabled" target="_blank" href="http://cs.leaplearner.com">cs链接</a>
      <!-- <a class="nav-item nav-link disabled" href="#">Disabled</a> -->
    </div>
  </div>
</nav>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-120390508-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-120390508-1');
</script>

`;

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

function load(){
  ace.require("ace/ext/language_tools");  
  JSEditor = ace.edit("code");  
  JSEditor.setOptions({  
    mode: "ace/mode/javascript",
    theme: "",
    // enableBasicAutocompletion: true,  
    // enableSnippets: true,  
    enableLiveAutocompletion: true,//智能补全  
    fontFamily: 'Courier New',
    fontSize: 16,
    showPrintMargin: false,
    useSoftTabs: true,
    navigateWithinSoftTabs: true,
    wrapBehavioursEnabled: true,
    autoScrollEditorIntoView: true,
    wrap: true,
  }); 
$("header").html(header);
$("footer").html(footer);

loadFile('examples/index.js')

}
