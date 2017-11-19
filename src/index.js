const canvas = require('./canvas.js').canvas
const ctx = require('./canvas.js').ctx
const collide = require('./collision.js')
const Key = require('./keys.js').Key
const Mouse = require('./mouse.js').Mouse // must after collide

const shapes = require('./shapes.js')
const Rss = require('./resource.js')

const Color = require('./colors.js')
const Util = require('./util.js')

window.canvas = canvas
window.ctx = ctx

window.Line = shapes.Line
window.Rectangle = shapes.Rectangle
window.Polygon = shapes.Polygon
window.Triangle = shapes.Triangle
window.Circle = shapes.Circle
window.Text = shapes.Text
window.Sprite = shapes.Sprite
window.Animation = shapes.Animation
window.Point = shapes.Point

window.Key = Key
window.Mouse = Mouse

window.nextFrame = Util.nextFrame
window.loadRssAndRun = Rss.loadRssAndRun

window.RGB = Color.RGB
window.RGBA = Color.RGBA
