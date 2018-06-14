export default class Transform {
  // 
  constructor () {
    this.anchorX = undefined
    this.anchorY = undefined
    this.scaleX = 1
    this.scaleY = 1
    this.skewX = 0
    this.skewY = 0
    this.translateX = 0
    this.translateY = 0
    this._degree = 0
    this.anchor = {x: 0.5, y: 0.5};
  }

  transformed () {
    return this.scaleX !== 1 || this.scaleY !== 1 ||
      this.skewX || this.skewY ||
      this.translateX || this.translateY || this._degree
  }

  scale (x, y) { this.scaleX, this.scaleY = x, y; }

  translate (x, y) { this.translateX, this.translateY = x, y; }

  skew (x, y) { this.skewX, this.skewY = x, y; }

  setAnchor (x, y) {
    // 设置旋转中心点，不能和setAnchorRate共存
    this.anchorX, this.anchorY = x, y;
    this.anchor = undefined;
  }

  setAnchorRate(x, y) {
    // 设置旋转中心相对位置，不能和setAnchor共存
    this.anchorX = this.anchorY = undefined;
    this.anchor = {x, y};
  }

  rotate (degree) { this._degree = degree; }

  set degree(degree) { this._degree = degree * 180 / Math.PI; }
  get degree() { return this._degree  * Math.PI / 180; }

  getRealPoint (p) {
    if (!this.transformed()) { return p }

    let x = p.x
    let y = p.y

    x -= this.anchorX
    y -= this.anchorY

    let degree = this.degree;
    let sin = Math.sin(degree);
    let cos = Math.cos(degree);

    let newX = x * cos - y * sin
    let newY = y * cos + x * sin
    x = newX
    y = newY

    newX = this.scaleX * x + this.skewX * y + this.translateX
    newY = this.skewY * x + this.scaleY * y + this.translateY
    x = newX
    y = newY

    x += this.anchorX
    y += this.anchorY

    return {x, y}
  }
}
