import { canvas, ctx } from './canvas'
import { Key } from './keys'
import { Mouse } from './mouse'
import { Line, Rectangle, Polygon, Triangle, Circle, Text, Sprite, Animation, Point, Ellipse } from './shapes'
import { nextFrame } from './util'
import { loadRssAndRun } from './resource'
import { RGB, RGBA, HSL, HSLA } from './colors'

// canvas
window.canvas = canvas
window.ctx = ctx

// shapes
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

// events
window.Key = Key
window.Mouse = Mouse

// rss
window.nextFrame = nextFrame
window.loadRssAndRun = loadRssAndRun

// colors
window.RGB = RGB
window.RGBA = RGBA
window.HSL = HSL
window.HSLA = HSLA
