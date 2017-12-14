function RGB (r, g, b) {
  r = Math.floor(r)
  g = Math.floor(g)
  b = Math.floor(b)
  return 'rgb(' + r + ', ' + g + ', ' + b + ')' 
}

function RGBA (r, g, b, a) {
  r = Math.floor(r)
  g = Math.floor(g)
  b = Math.floor(b)
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')' 
}

function HSL (h, s, l) {
  h = Math.floor(h)
  return `hsl(${h}, ${s * 100}%, ${l * 100}%)`
}

function HSLA (h, s, l, a) {
  h = Math.floor(h)
  return `hsla(${h}, ${s * 100}%, ${l * 100}%, ${a})`
}

export { RGB, RGBA, HSL, HSLA }
