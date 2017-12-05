import { canvas, ctx } from './canvas'
import { Key } from './keys'
import { Mouse } from './mouse'
import { Line, Rectangle, Polygon, Triangle, Circle, Text, Sprite, Animation, Point, Ellipse } from './shapes'
import { nextFrame } from './util'
import { loadRssAndRun } from './resource'
import { RGB, RGBA } from './colors'

window.canvas = canvas
window.ctx = ctx

window.Line = Line
window.Rectangle = Rectangle
window.Polygon = Polygon
window.Triangle = Triangle
window.Circle = Circle
window.Text = Text
window.Sprite = Sprite
window.Animation = Animation
window.Point = Point
window.Ellipse = Ellipse

window.Key = Key
window.Mouse = Mouse

window.nextFrame = nextFrame
window.loadRssAndRun = loadRssAndRun

window.RGB = RGB
window.RGBA = RGBA
