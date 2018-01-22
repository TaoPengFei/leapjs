import { canvas, ctx } from './canvas'
import { Key } from './keys'
import { Mouse } from './mouse'
import { Line, Rectangle, Polygon, Triangle, Circle, Text, Sprite, Animation, Point, Ellipse } from './shapes'
import { nextFrame } from './util'
import { loadRssAndRun } from './resource'
import { RGB, RGBA, HSL, HSLA } from './colors'

import { Swing, Increase, Sine } from './changingNumber'
import { background, noFill, noStroke, fill, stroke, lineWidth,
  rectangle, circle, line, point, polygon, triangle, ellipse,
  image, text, font, playSound, play } from './basicDraw'

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

// VARS
window.Swing = Swing
window.Increase = Increase
window.Sine = Sine

window.background = background
window.noFill = noFill
window.noStroke = noStroke
window.fill = fill
window.stroke = stroke
window.lineWidth = lineWidth
window.rectangle = rectangle
window.circle = circle
window.line = line
window.point = point
window.polygon = polygon
window.triangle = triangle
window.ellipse = ellipse
window.image = image
window.text = text
window.font = font
window.playSound = playSound
window.play = play
