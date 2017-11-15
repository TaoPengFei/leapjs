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

JSEditor.setSize('auto', 600);

function iframe_html(){
    var html = '';
    var js = JSEditor.getValue();

    html += '<html>\n';
    html += '<body style="margin:0">\n';
    html += '<script src="LLEG.js"><\/script>\n';
    html += '<script>';
    html += js;
    html += '<\/script>\n';
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

    iframe.focus();
}

function load(file){
    $.ajax({
        type: "get",
        url: file,
        dataType: "text",
        success: function(content){
            JSEditor.setValue(content); 
            submit();
        }
    });
}

load('./examples/animation.js');
