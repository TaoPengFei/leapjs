canvas.width = 350;
canvas.height = 500;
canvas.preventDefaultEvent();

var block = [];
var row = 2;
var column = 2;
var i, j;
var sideLength = 8;
var standColor, errorColor;
var r1, g1, b1, r2, b2, g2;
var dif = 80;
var errorRow, errorColumn;
var gameState = 0;
var txt = new Text();
var score = 0;
var blank = 0;

function Main() {
    switch (gameState) {
        case 0:
            Init();
            break;
        case 1:
            Loop();
            break;
        case 2:
            Over();
            break;
        default:
            break;
    }
}

function Init() {
    canvas.clear();
    row = 2;
    column = 2;
    score = 0;
    blank = 10;
    txt.x = 125;
    txt.y = 395;
    gameState = 1;
    nextFrame(Main);
}

function Loop() {
    canvas.clear();
    // sideLength = (300 + blank) / column - blank;
    sideLength = 3000 / (11 * column - 1);
    blank = 300 / (11 * column - 1);
    r1 = Math.floor(Math.random() * (256 - dif));
    g1 = Math.floor(Math.random() * (256 - dif));
    b1 = Math.floor(Math.random() * (256 - dif));
    randomColor(r1, g1, b1);
    for (i = 0; i < row; i++) {
        block[i] = [];
        for (j = 0; j < column; j++) {
            block[i][j] = new Rectangle(25 + j * (sideLength + blank), 50 + i * (sideLength + blank), sideLength, sideLength);
            block[i][j].fillStyle = RGB(r1, g1, b1);
            block[i][j].click = function() {
                gameState = 2;
                nextFrame(Main);
            };
        }
    }

    errorRow = Math.floor(Math.random() * row);
    errorColumn = Math.floor(Math.random() * column);
    block[errorRow][errorColumn].fillStyle = RGB(r2, g2, b2);
    block[errorRow][errorColumn].click = function() {
        score += row * column;
        if (dif > 20) {
            dif = dif - 5;
        }
        else {
            dif = 80;
            column = column + 1;
            row = row + 1;
        }
        nextFrame(Main);
    };

    for (i = 0; i < row; i++) {
        for (j = 0; j < column; j++) {
            block[i][j].fill();
        }
    }
    
    txt.src = "得分：" + score;
    txt.draw();
}

function Over() {
    canvas.clear();
    txt.x = 95;
    txt.y = 170;
    txt.src = "您的分数为" + score + "分";
    txt.x = 95;
    txt.y = 200;
    txt.src = "点击我重新开始";
    txt.draw();
    txt.click = function() {
        gameState = 0;
        nextFrame(Main);
    }
}

function randomColor(r, g, b) {
    var ex = Math.floor(Math.random() * 3);
    r2 = r1;
    g2 = g1;
    b2 = b1;
    switch (ex) {
        case 0:
            r2 = r1 + dif;
            break;
        case 1:
            g2 = g1 + dif;
            break;
        case 2:
            b2 = b1 + dif;
            break;
        default:
            break;
    }
}

Main();