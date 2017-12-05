/* global chai, RGB, RGBA, HSL, HSLA */
var assert = chai.assert

describe('Colors', function () {
  describe('RGB', function () {
    it('is a functon', function () {
      assert.instanceOf(RGB, Function)
    })
    it('return rgb string', function () {
      assert.equal(RGB(1, 2, 3), 'rgb(1, 2, 3)')
    })
    it('cannot use decimal numbers', function () {
      assert.notEqual(RGB(1.1, 2.2, 3.3), 'rgb(1, 2, 3)')
    })
  })

  describe('RGBA', function () {
    it('is a functon', function () {
      assert.instanceOf(RGBA, Function)
    })
    it('return rgb string', function () {
      assert.equal(RGBA(1, 2, 3, 0.1), 'rgba(1, 2, 3, 0.1)')
    })
    it('cannot use decimal numbers', function () {
      assert.notEqual(RGBA(1.1, 2.2, 3.3, 0.2), 'rgba(1, 2, 3, 0.2)')
    })
  })

  describe('HSL', function () {
    it('is a function', function () {
      assert.instanceOf(HSL, Function)
    })
    it('return hsl string', function () {
      assert.equal(HSL(100, 0.6, 0.1), 'hsl(100, 60%, 10%)')
    })
  })

  describe('HSLA', function () {
    it('is a function', function () {
      assert.instanceOf(HSLA, Function)
    })
    it('return hsl string', function () {
      assert.equal(HSLA(100, 0.6, 0.1, 0.2), 'hsla(100, 60%, 10%, 0.2)')
    })
  })
})
