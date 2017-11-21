/* global chai, RGB, RGBA */
var assert = chai.assert

describe('Colors', function () {
  describe('RGB', function () {
    it('is a functon', function () {
      assert.instanceOf(RGB, Function)
    })
    it('return rgb string', function () {
      assert.equal(RGB(1, 2, 3), 'rgb(1,2,3)')
    })
    it('can use decimal numbers', function () {
      assert.equal(RGB(1.1, 2.2, 3.3), 'rgb(1,2,3)')
    })
  })

  describe('RGBA', function () {
    it('is a functon', function () {
      assert.instanceOf(RGBA, Function)
    })
    it('return rgb string', function () {
      assert.equal(RGBA(1, 2, 3, 0.1), 'rgba(1,2,3,0.1)')
    })
    it('can use decimal numbers', function () {
      assert.equal(RGBA(1.1, 2.2, 3.3, 0.2), 'rgba(1,2,3,0.2)')
    })
  })
})
