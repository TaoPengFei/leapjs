import { canvas, ctx } from './canvas'
import { Key } from './keys'
import { Mouse } from './mouse'
import { Line, Rectangle, Polygon, Triangle, Circle, Text, Sprite, Animation, Point, Ellipse } from './shapes'
import { nextFrame, run, stop } from './util'
import { loadRssAndRun } from './resource'
import { RGB, RGBA, HSL, HSLA } from './colors'

import { Swing, Increase, Sine, Volatile, randint } from './basicMethod'
import { background, fill, rectangle, circle, line, point, polygon, triangle, ellipse,
  image, text, font, playSound, play, pause } from './basicDraw'

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
window.font = font
window.playSound = playSound
window.play = play
window.pause = pause

window.noStroke = function(){
    console.log("'noStroke' is deprecated, use 'fill(boolen)' instead");
}

window.canvas.preventDefaultEvent = function(){
    console.log("'canvas.preventDefaultEvent' is deprecated, you don't need it any more");
}
