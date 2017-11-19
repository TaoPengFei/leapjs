var count = 0
var loaded = 0
var main

function loadRssAndRun (func) {
  main = func
  check()
}

function add () {
  count++
}

function load () {
  loaded++
}

function isLoaded () {
  return loaded >= count
}

var n = 0

function check () {
  if (isLoaded()) { main() } else {
    canvas.clear()
    'LeapLearner'.draw(canvas.width / 2 - 110, 200, null, '40px Arial')
    var msg = 'loading'
    for (var i = 0; i < n % 6; i++) { msg += '.' }
    var r1 = new Rectangle(50, canvas.height - 200, canvas.width - 100, 10)
    var r2 = new Rectangle(50, canvas.height - 200, (canvas.width - 100) * loaded / count, 10)
    r2.fillStyle = 'orange'
    r1.fill()
    r2.fill()
    msg.draw(canvas.width / 2 - 40, canvas.height - 220)
    n++
    setTimeout(check, 500)
  }
}

module.exports = {
  add: add,
  load: load,
  loadRssAndRun: loadRssAndRun
}
