import { canvas, ctx } from './canvas'
import { Key } from './keys'
import { Mouse } from './mouse'
import { Line, Rectangle, Polygon, Triangle, Circle, Text, Sprite, Animation, Point, Ellipse } from './shapes'
import { nextFrame, run, stop } from './util'
import { loadRssAndRun } from './resource'
import { RGB, RGBA, HSL, HSLA } from './colors'

import { Swing, Increase, Sine, Volatile, randint } from './basicMethod'
import { background, fill, rectangle, circle, line, point, polygon, triangle, ellipse,
  image, text, font, play, pause } from './basicDraw'

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
window.loadRssAndRun = loadRssAndRun
window.run = run
window.stop = stop

// colors
window.RGB = RGB
window.RGBA = RGBA
window.HSL = HSL
window.HSLA = HSLA

// basic method
window.Swing = Swing
window.Increase = Increase
window.Sine = Sine
window.Volatile = Volatile
window.randint = randint

// basic draw method
window.background = background
window.fill = fill
window.rectangle = rectangle
window.circle = circle
window.line = line
window.point = point
window.polygon = polygon
window.triangle = triangle
window.ellipse = ellipse
window.image = image
window.text = text
window.play = play
window.pause = pause

window.noStroke = function(){ console.log("'noStroke'不再使用了, 请使用'fill(boolen)'");};
window.canvas.preventDefaultEvent = function(){console.log("'canvas.preventDefaultEvent'不再使用了");};
window.nextFrame = function () { console.log("'nextFrame'不再使用了, 请使用'run(function)' instead");};
window.playSound = function () { console.log("'playSound'不再使用了, 请使用'play' instead"); }
window.font = function () { console.log("'font'不再使用了"); }
