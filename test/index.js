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
    assert.ok(canvas instanceof Object)
  })
  it('ctx should be exist', function () {
    assert.ok(ctx)
    assert.ok(ctx instanceof Object)
  })

  describe('Shapes should be exist', function () {
    it('Line should be exist', function () {
      assert.ok(Line)
      assert.ok(Line instanceof Function)
    })
    it('Rectangle should be exist', function () {
      assert.ok(Rectangle)
      assert.ok(Rectangle instanceof Function)
    })
    it('Polygon should be exist', function () {
      assert.ok(Polygon)
      assert.ok(Polygon instanceof Function)
    })
    it('Triangle should be exist', function () {
      assert.ok(Triangle)
      assert.ok(Triangle instanceof Function)
    })
    it('Circle should be exist', function () {
      assert.ok(Circle)
      assert.ok(Circle instanceof Function)
    })
    it('Text should be exist', function () {
      assert.ok(Text)
      assert.ok(Text instanceof Function)
    })
    it('Sprite should be exist', function () {
      assert.ok(Sprite)
      assert.ok(Sprite instanceof Function)
    })
    it('Animation should be exist', function () {
      assert.ok(Animation)
      assert.ok(Animation instanceof Function)
    })
    it('Point should be exist', function () {
      assert.ok(Point)
      assert.ok(Point instanceof Function)
    })
  })

  describe('Events should be exist', function () {
    it('Key should be exist', function () {
      assert.ok(Key)
      assert.isNotOk(Key instanceof Function)
      assert.ok(Key instanceof Object)
    })
    it('Mouse should be exist', function () {
      assert.ok(Mouse)
      assert.isNotOk(Mouse instanceof Function)
      assert.ok(Mouse instanceof Object)
    })
  })

  describe('Resource should be exist', function () {
    it('nextFrame should be exist', function () {
      assert.ok(nextFrame)
      assert.ok(nextFrame instanceof Function)
    })
    it('loadRssAndRun should be exist', function () {
      assert.ok(loadRssAndRun)
      assert.ok(loadRssAndRun instanceof Function)
    })
  })

  describe('Colors should be exist', function () {
    it('RGB should be exist', function () {
      assert.ok(RGB)
      assert.ok(RGB instanceof Function)
    })
    it('RGBA should be exist', function () {
      assert.ok(RGBA)
      assert.ok(RGBA instanceof Function)
    })
  })
})
