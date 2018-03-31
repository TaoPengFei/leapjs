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
      canvas.resize();
      assert.equal(canvas.width, 450);
      assert.equal(canvas.height, 600);

      assert.equal(ctx.strokeStyle, '#ffa500')
      assert.equal(ctx.fillStyle, '#ffa500')
    })

    it('canvas methods should be ready', function () {
      assert.instanceOf(canvas.clear, Function)
      assert.instanceOf(canvas.showAxis, Function)
    })
  })

  it('ctx functions should be ready', function () {
    assert.ok(ctx)
  })
})
