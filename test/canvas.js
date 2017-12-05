/* global chai, canvas
*/
var assert = chai.assert

describe('Canvas', function () {
  describe('Canvas functions should be ready', function () {
    it('canvas should be exist', function () {
      let c = document.getElementsByTagName('canvas')[1];
      assert.deepEqual(c, canvas)
    })

    it('resize should be ready', function () {
      assert.instanceOf(canvas.resize, Function)

      ctx.strokeStyle = ''
      ctx.fillStyle = ''
      canvas.resize()
      assert.equal(canvas.width, window.innerWidth - 2)
      assert.equal(canvas.height, window.innerHeight - 60)

      assert.equal(ctx.strokeStyle, '#00ffff')
      assert.equal(ctx.fillStyle, 'rgba(0, 255, 255, 0.501960784313726)')
    })
    it('clear should be ready', function () {
      assert.instanceOf(canvas.clear, Function)
      assert.instanceOf(canvas.showAxis, Function)
    })
  })

  it('ctx functions should be ready', function () {
    assert.ok(ctx.drawPathByPoints instanceof Function)
  })

  describe('preventDefaultEvent', function () {
    it('should be exit', function () {
      assert.ok(canvas.preventDefaultEvent)
      assert.ok(canvas.preventDefaultEvent, Function)
    })
  })
})
