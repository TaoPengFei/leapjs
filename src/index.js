var  canvas = require('./canvas.js').canvas;
var  ctx = require('./canvas.js').ctx;
var Key = require('./keys.js').Key;

var shapes = require('./shapes.js');

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

window.Key = Key;
