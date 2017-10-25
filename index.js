var JSEditor = CodeMirror.fromTextArea(document.getElementById("js"), {
    lineNumbers: true,
    lineWrapping: true,
    styleActiveLine: true,
    indentUnit: 4, //theme: "ambiance",
    mode: {name: "javascript", globalVars: true},
    extraKeys: {"Ctrl-Q": "autocomplete"},
    gutters: ["CodeMirror-lint-markers"],
    lint: true
});

JSEditor.setSize('auto', 'auto');

var dc = '';
dc += 'var rect = new Rectangle(-100, -100, 200, 200);\n' ;
dc += '\n';
dc += 'rect.translate(200, 200);\n';
dc += 'var x = 0;\n';
dc += '\n';
dc += '(function main(){\n';
dc += '    canvas.clear();\n';
dc += '    rect.rotate(x++);\n';
dc += '    rect.draw();\n';
dc += '    requestAnimationFrame(main);\n';
dc += '}() );\n';

JSEditor.setValue(dc); 

function iframe_html(){
    var html = '';
    var js = JSEditor.getValue();

    html += '<html>\n';
    html += '<body>\n';
    html += '<canvas id="canvas" width="600" height="400" style="border: 1px solid #d3d3d3;">\n';
    html += '<\/canvas>\n';
    html += '<p id="xy"><\/p>\n';
    html += '<script src="LLEG.js"><\/script>\n';
    html += '<script>';
    html += js;
    html += '<\/script>\n';
    html += '<script>document.onmousemove = function(){ document.getElementById("xy").innerHTML = "" + Mouse.x + ", " + Mouse.y; }<\/script>\n'; 
    html += '<\/body>\n';
    return html;
}

function submit(){
    var el = document.getElementsByTagName("iframe")[0];
    el.parentNode.removeChild(el);

    var iframe = document.createElement("iframe");
    document.querySelector("div#output").appendChild(iframe);

    var iframe_doc = iframe.contentDocument;

    iframe_doc.open();
    iframe_doc.write(iframe_html());
    iframe_doc.close();
}

submit();

