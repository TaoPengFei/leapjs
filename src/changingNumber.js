class Swing {
  constructor (min, max, speed) {
    this.min = min
    this.max = max
    this.cycle = (max - min) / speed * 2000
    this.t = new Date().getTime()
  }

  [Symbol.toPrimitive] (hint) {
    var deltaT = (new Date().getTime() - this.t) % this.cycle
    var x = (this.max - this.min) * 2 * deltaT / this.cycle + this.min
    if (deltaT > this.cycle / 2) return 2 * this.max - x
    else return x
  }
}

class Increase {
  constructor (min, max, speed) {
    this.min = min
    this.max = max
    this.cycle = (max - min) / speed * 1000
    this.t = new Date().getTime()
  }

  [Symbol.toPrimitive] (hint) {
    var deltaT = (new Date().getTime() - this.t) % this.cycle
    return (this.max - this.min) * deltaT / this.cycle + this.min
  }
}

class Sine {
  constructor (min, max, speed) {
    this.min = min
    this.max = max
    this.cycle = (max - min) / speed * 2000
    this.t = new Date().getTime()
  }

  [Symbol.toPrimitive] (hint) {
    var deltaT = (new Date().getTime() - this.t) % this.cycle
    return (this.max + this.min) / 2 +
      (this.max - this.min) / 2 * Math.sin(deltaT / this.cycle * Math.PI * 2)
  }
}

export { Swing, Increase, Sine }
