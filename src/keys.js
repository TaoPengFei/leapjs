let Key = {}

const keyboard = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=,./<>?|\\;:\'"'
const keyboard2 = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'Escape', ' ', 'Tab', 'Shift', 'Control', 'Alt', 'Backspace']
const noPressKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Escape', 'Tab', 'Shift', 'Control', 'Alt']

for (let i = 0; i < keyboard.length; i++) {
  Key[keyboard[i]] = {}
}

for (let i = 0; i < keyboard2.length; i++) {
  Key[keyboard2[i]] = {}
}

document.onkeyup = function (e) {
  let key = Key[e.key]
  if (key && key.up) {
    key.up()
  }
}

document.onkeydown = function (e) {
  let key = Key[e.key]
  if (key && key.down) { key.down() }
  if (noPressKeys.includes(e.key) && key.press) {
    key.press()
  }
}

// keyboard2 will not file key press event
document.onkeypress = function (e) {
  let key = Key[e.key]
  if (key && key.press) { key.press() }
}

export { Key }
