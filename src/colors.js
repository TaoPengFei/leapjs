function RGB (r, g, b) {
  return 'rgb(' + Math.floor(r) + ',' + Math.floor(g) + ',' + Math.floor(b) + ')'
}

function RGBA (r, g, b, a) {
  return 'rgba(' + Math.floor(r) + ',' + Math.floor(g) + ',' + Math.floor(b) + ',' + a + ')'
}

module.exports = {
  RGB: RGB,
  RGBA: RGBA
}
