/* global chai, Rectangle, Circle */
var assert = chai.assert

describe('Collision', function () {
  it('shape has collide method', function () {
    assert.instanceOf(Rectangle.prototype.collide, Function)
    assert.instanceOf(Circle.prototype.collide, Function)
  })

  describe('Rect with Rect', function () {
    var rect1 = new Rectangle(0, 0, 100, 100)
    var rect2 = new Rectangle(100, 100, 100, 100)
    var rect3 = new Rectangle(101, 101, 100, 100)

    it('can be collided', function () {
      assert.ok(rect1.collide(rect1))
      assert.ok(rect1.collide(rect2))
      assert.ok(rect2.collide(rect3))
      assert.isNotOk(rect1.collide(rect3))
    })
  })
})
