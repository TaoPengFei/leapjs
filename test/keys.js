/* global chai, Key */
var assert = chai.assert

describe('Keys', function () {
  describe('a-z, 1-10', function () {
    it('a-z shoud exist', function () {
      let letters = 'abcdefghijklmnopqrstuvwxyz'
      for (let i = 0; i < letters.length; i++) {
        assert.ok(Key.hasOwnProperty(letters[i]))
      }
    })
    it('0-9 shoud exist', function () {
      let letters = '0123456789'
      for (let i = 0; i < letters.length; i++) {
        assert.ok(Key.hasOwnProperty(letters[i]))
      }
    })
  })

  it('Arrows should exist', function () {
    const arrows = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
    for (let i = 0; i < arrows.length; i++) {
      assert.ok(Key.hasOwnProperty(arrows[i]))
    }
  })
})
