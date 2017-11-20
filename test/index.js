/* global chai, canvas, ctx, Rectangle, Circle, Polygon, Triangle
  Line, Sprite, Point, Text,
  Key, Mouse,
  nextFrame, loadRssAndRun, RGB, RGBA
  */
var assert = chai.assert

describe('Mocha', function () {
  it('mocha should be ready to go', function () {
    assert.isOk(true)
    assert.isNotOk(false)
  })
})

describe('Window Objects', function () {
  it('canvas should be exist', function () {
    assert.ok(canvas)
    assert.instanceOf(canvas, Object)
  })
  it('ctx should be exist', function () {
    assert.ok(ctx)
    assert.instanceOf(ctx, Object)
  })

  describe('Shapes should be exist', function () {
    it('Line should be exist', function () {
      assert.ok(Line)
      assert.instanceOf(Line, Function)
    })
    it('Rectangle should be exist', function () {
      assert.ok(Rectangle)
      assert.instanceOf(Rectangle, Function)
    })
    it('Polygon should be exist', function () {
      assert.ok(Polygon)
      assert.instanceOf(Polygon, Function)
    })
    it('Triangle should be exist', function () {
      assert.ok(Triangle)
      assert.instanceOf(Triangle, Function)
    })
    it('Circle should be exist', function () {
      assert.ok(Circle)
      assert.instanceOf(Circle, Function)
    })
    it('Text should be exist', function () {
      assert.ok(Text)
      assert.instanceOf(Text, Function)
    })
    it('Sprite should be exist', function () {
      assert.ok(Sprite)
      assert.instanceOf(Sprite, Function)
    })
    it('Animation should be exist', function () {
      assert.ok(Animation)
      assert.instanceOf(Animation, Function)
    })
    it('Point should be exist', function () {
      assert.ok(Point)
      assert.instanceOf(Point, Function)
    })
  })

  describe('Events should be exist', function () {
    it('Key should be exist', function () {
      assert.ok(Key)
      assert.instanceOf(Key, Object)
    })
    it('Mouse should be exist', function () {
      assert.ok(Mouse)
      assert.instanceOf(Mouse, Object)
    })
  })

  describe('Resource should be exist', function () {
    it('nextFrame should be exist', function () {
      assert.ok(nextFrame)
      assert.instanceOf(nextFrame, Function)
    })
    it('loadRssAndRun should be exist', function () {
      assert.ok(loadRssAndRun)
      assert.instanceOf(loadRssAndRun, Function)
    })
  })

  describe('Colors should be exist', function () {
    it('RGB should be exist', function () {
      assert.ok(RGB)
      assert.instanceOf(RGB, Function)
    })
    it('RGBA should be exist', function () {
      assert.ok(RGBA)
      assert.instanceOf(RGBA, Function)
    })
  })
})
