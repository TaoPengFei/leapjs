import {shapes} from './util'
import Transform from './transform'


let canvas = document.createElement('canvas')
let p = document.createElement('p')

document.body.appendChild(canvas)
document.body.appendChild(p)

canvas.style.cssText = `
  border: 1px solid #d3d3d3;

  user-select:none; 
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;

  -webkit-touch-callout:none;
  touch-callout:none;`
/*
  position: absolute; 
  z-index: 1;
*/

p.style.cssText = 'color: orange;'

let ctx = canvas.getContext('2d')

ctx._setTransform = function (transform) {
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.transform(
    transform.scaleX, transform.skewX,
    transform.skewY, transform.scaleY,
    transform.translateX, transform.translateY
  )
  ctx.rotate(transform.degree)
}

canvas.resize = function (width, height) {
  canvas.width = width || 450 // borders size
  canvas.height = height || 600 // p, height
  ctx.fillStyle = ctx.strokeStyle = 'orange';
  
  // 设置文字默认对齐方式：顶部对齐
  ctx.textBaseline = 'top'

  // 设置默认阴影
  ctx.shadowBlur = 5;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowOpen = true;
}

canvas.shadow = function(open=true){
  ctx.shadowOpen = open;
}

canvas.resize()
canvas.transform = new Transform()

canvas.scale = function (x, y) {
  canvas.transform.scale(x, y)
  ctx._setTransform(canvas.transform)
  // thick the line width
  ctx.lineWidth = 2 / (x + y)
}

canvas.rotate = function (degree) {
  canvas.transform.rotate(degree)
  ctx._setTransform(canvas.transform)
}

canvas._translate = function (x, y) {
  canvas.transform.translate(x, y)
  ctx._setTransform(canvas.transform)
}

canvas.clear = function () {
  shapes.clear();
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
};

function ctxline(x1, y1, x2, y2){
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

canvas.showAxis = function () {
  /* 
  显示坐标轴
  宽度、高度大小为画布的2倍
  */
  ctx.save();
  ctx.strokeStyle = '#ff8800';
  ctx.fillStyle = '#ff8800';
  ctx.shadowColor = "rgba(0,0,0,0)"; // no shadow

  let t = canvas.transform;
  let gap = 10; // 坐标轴间隔
  if (t.scaleX >= 10 && t.scaleY >= 10){ gap = 1; }

  let w = canvas.width / Math.abs(t.scaleX);
  let h = canvas.height / Math.abs(t.scaleY);

  ctx.font = gap*1.5 + "px Arial";
  
  for (let i = 0; i < w; i += gap) {
    if (i % (10 * gap) === 0) {
      ctx.fillText( i, i, 0);
      ctx.fillText(-i, -i, 0);
      ctx.lineWidth = gap/20;
    } else ctx.lineWidth = gap/50;
    ctxline(i, -h, i, h);
    ctxline(-i, -h, -i, h);
  }

  for (let i = 0; i < h; i += gap) {
    if (i % (10 * gap) === 0) {
      ctx.fillText( i, 0,  i);
      ctx.fillText(-i, 0, -i);
      ctx.lineWidth = gap/20;
    } else ctx.lineWidth = gap/50;
    ctxline(-w, i, w, i);
    ctxline(-w, -i, w, -i);
  }
  ctx.restore();
};


ctx.update = function (shape) {
  if (shape.fillStyle) ctx.fillStyle = shape.fillStyle
  if (shape.strokeStyle) ctx.strokeStyle = shape.strokeStyle

  if (shape.lineCap) ctx.lineCap = shape.lineCap
  if (shape.lineJoin) ctx.lineJoin = shape.lineJoin
  if (shape.lineWidth !== undefined) ctx.lineWidth = shape.lineWidth
  if (shape.miterLimit !== undefined) ctx.miterLimit = shape.miterLimit

  if (shape.globalAlpha !== undefined) ctx.globalAlpha = shape.globalAlpha
  if (shape.globalCompositeOperation) ctx.globalCompositeOperation = shape.globalCompositeOperation

  if (shape.lineDash) ctx.setLineDash(shape.lineDash)
  if (shape.textAlign) ctx.textAlign = shape.textAlign
  if (shape.textBaseline) ctx.textBaseline = shape.textBaseline

  if (shape.shadowColor) ctx.shadowColor = shape.shadowColor;
  // 如果图形不透明，设置图形的阴影
  else if (ctx.shadowOpen && ctx.globalAlpha >= 1) ctx.shadowColor = "#00000088";

  if (shape.shadowBlur !== undefined) ctx.shadowBlur = shape.shadowBlur
  if (shape.shadowOffsetX !== undefined) ctx.shadowOffsetX = shape.shadowOffsetX
  if (shape.shadowOffsetY !== undefined) ctx.shadowOffsetY = shape.shadowOffsetY

  if (shape.transform.transformed()) {
    shape.updateAnchor();
    ctx.updateTransform(shape.transform);
  }
}

ctx.updateTransform = function (transform) {
  ctx.translate(transform.anchorX, transform.anchorY);

  ctx.rotate(transform.degree);
  ctx.transform(
    transform.scaleX, transform.skewX,
    transform.skewY, transform.scaleY,
    transform.translateX, transform.translateY
  );

  ctx.translate(-transform.anchorX, -transform.anchorY);
}

canvas.getRealPoint = function (p) {
  if (!this.transform.transformed()) { return p }
  let t = this.transform

  let x = (p.x - t.translateX)/t.scaleX;
  let y = (p.y - t.translateY)/t.scaleY

  let sin = Math.sin(-t.degree)
  let cos = Math.cos(-t.degree)

  return { x: x*cos - y*sin, y: y*cos + x*sin };
}

export { canvas, ctx, p }
