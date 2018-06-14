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
    return this.scaleX !== 1 || this.scaleY !== 1 || this.skewX || this.skewY ||
      this.translateX || this.translateY || this._degree;
  }

  scale     (x, y) { [this.scaleX,     this.scaleY]     = [x, y]; }
  skew      (x, y) { [this.skewX,      this.skewY]      = [x, y]; }
  translate (x, y) { [this.translateX, this.translateY] = [x, y]; }

  setAnchor (x, y) {
    // 设置旋转中心点，不能和setAnchorRate共存
    [this.anchorX, this.anchorY] = [x, y];
    this.anchor = undefined;
  }

  setAnchorRate(x, y) {
    // 设置旋转中心相对位置，不能和setAnchor共存
    this.anchorX = this.anchorY = undefined;
    this.anchor = {x, y};
  }

  rotate (degree) { this._degree = degree*Math.PI / 180;}

  // 角度，单位为角度，一圈为360度，在内部记录为角度
  set degree(degree) { this._degree = degree*Math.PI / 180; }
  get degree() { return this._degree; }

  getRealPoint (p) {
    if (!this.transformed()) { return p }

    let {x, y} = p;

    x -= this.anchorX
    y -= this.anchorY

    let degree = this.degree;
    let sin = Math.sin(degree);
    let cos = Math.cos(degree);

    [x, y] = [x*cos - y*sin, y*cos + x*sin];

    [x, y] = [this.scaleX*x + this.skewX*y + this.translateX, this.skewY*x + this.scaleY*y + this.translateY];


    x += this.anchorX;
    y += this.anchorY;

    return {x, y};
  }
}
