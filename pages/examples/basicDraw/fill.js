/***************************************************************

fill(bool)

设置图形是否填充，对后续所有图形生效

* fill(true): 填充图形
* fill(false): 不填充图形


***************************************************************/
canvas.showAxis();

circle(100, 50, 20);

rectangle(50, 150, 100, 50, 'red');

ellipse(100, 250, 30, 20, 'green');

fill(false); // 无填充

circle(200, 50, 20);

rectangle(200, 150, 100, 50, 'red');

ellipse(200, 250, 30, 20, 'green');

fill(true);

circle(300, 50, 20);

rectangle(200, 150, 100, 50, 'red');

ellipse(300, 250, 30, 20, 'green');