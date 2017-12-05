function RGB (r, g, b) {
  return `rgb(${r}, ${g}, ${b})`
}

function RGBA (r, g, b, a) {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

function HSL (h, s, l) {
  return `hsl(${h}, ${s * 100}%, ${l * 100}%)`
}

function HSLA (h, s, l, a) {
  return `hsla(${h}, ${s * 100}%, ${l * 100}%, ${a})`
}

export { RGB, RGBA, HSL, HSLA }
