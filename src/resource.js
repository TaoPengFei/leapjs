import { canvas } from './canvas'
import { Text, Rectangle } from './shapes'

let count = 0
let loaded = 0
let main

function loadRssAndRun (func) {
  main = func
  check()
}

let Rss = {}
Rss.add = function () { count++ }
Rss.load = function () { loaded++ }
Rss.isLoaded = function () { return loaded >= count }

let n = 0

function check () {
  if (Rss.isLoaded()) { main() } else {
    canvas.clear()

    new Text('LeapLearner', canvas.width / 2 - 110, 200, 40).draw()

    let msg = 'loading'
    for (let i = 0; i < n % 6; i++) { msg += '.' }
    new Text(msg, canvas.width / 2 - 40, canvas.height - 240).draw()

    new Rectangle(50, canvas.height - 200, canvas.width - 100, 10).fill()

    let r2 = new Rectangle(50, canvas.height - 200, (canvas.width - 100) * loaded / count, 10)
    r2.fillStyle = 'orange'
    r2.fill()

    n++
    setTimeout(check, 100)
  }
}

export { Rss, loadRssAndRun }
