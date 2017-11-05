var canvas = require('./canvas.js').canvas;
var ctx = require('./canvas.js').ctx;
var collide = require('./collision.js');
var Key = require('./keys.js').Key;
var Mouse = require('./mouse.js').Mouse; // must after collide

var shapes = require('./shapes.js');
var Rss = require('./resource.js');

var Color = require('./colors.js');
var Util = require('./util.js');

window.canvas = canvas;
window.ctx = ctx;

window.Line = shapes.Line;
window.Rectangle = shapes.Rectangle;
window.Polygon = shapes.Polygon;
window.Triangle = shapes.Triangle;
window.Circle = shapes.Circle;
window.Text = shapes.Text;
window.Sprite = shapes.Sprite;
window.Animation = shapes.Animation;
window.Point = shapes.Point;

window.Key = Key;
window.Mouse = Mouse;

window.nextFrame = Util.nextFrame;
window.loadRssAndRun = Rss.loadRssAndRun;

window.RGB = Color.RGB;
window.RGBA = Color.RGBA;
