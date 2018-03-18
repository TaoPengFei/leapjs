class Volatile {
  constructor (func) {
    this.func = func
    this.startTime = new Date().getTime()
  }

  [Symbol.toPrimitive] (hint) {
    passedTime = (new Date().getTime() - this.startTime ) / 1000
    return this.func(passedTime)
  }
}

class Swing {
  constructor (min, max, cycleTime, loop=true) {
    this.min = min
    this.max = max
    this.cycleTime = cycleTime
    this.loop = loop
    this.startTime = new Date().getTime()
  }

  [Symbol.toPrimitive] (hint) {
    let passedTime = (new Date().getTime() - this.startTime) / 1000  // second
    if(!this.loop && passedTime > this.cycleTime) return this.min;

    passedTime %= this.cycleTime

    if(passedTime > this.cycleTime / 2) 
      passedTime = this.cycleTime - passedTime

    return (this.max - this.min) * 2 * passedTime / this.cycleTime + this.min
  }
}

class Increase {
  constructor (min, max, cycleTime, loop=true) {
    this.min = min
    this.max = max
    this.cycleTime = cycleTime
    this.loop = loop
    this.startTime = new Date().getTime()
  }

  [Symbol.toPrimitive] (hint) {
    let passedTime = (new Date().getTime() - this.startTime) / 1000  // second
    if(!this.loop && passedTime > this.cycleTime) return this.min;

    passedTime %= this.cycleTime

    return (this.max - this.min) * passedTime / this.cycleTime + this.min
  }
}

class Sine {
  constructor (mean, wave, cycleTime, loop=true) {
    this.mean = mean
    this.wave = wave
    this.cycleTime = cycleTime
    this.loop = loop
    this.startTime = new Date().getTime()
  }

  [Symbol.toPrimitive] (hint) {
    let passedTime = (new Date().getTime() - this.startTime) / 1000  // second
    if(!this.loop && passedTime > this.cycleTime) return this.mean;

    passedTime %= this.cycleTime

    return this.mean + this.wave * Math.sin(passedTime / this.cycleTime * Math.PI * 2)
  }
}

function randint (a, b) {
  return Math.floor(a + Math.random() * (b - a))
}

export { Swing, Increase, Sine, Volatile, randint }
