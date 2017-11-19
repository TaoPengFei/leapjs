// detect collision using shadows
// p: Point, {x, y}
// ps: Points, Array
// rect: {minX, maxX, minY, maxY}
import { ctx } from './canvas'

function collide (shape1, shape2) {
  const ps1 = shape1.points
  const ps2 = shape2.points

  if (ps1.length < 2) return false
  if (ps2.length < 2) return false

  // quick check start
  let r1 = {}
  let r2 = {}
  r1 = getRectShape(ps1)
  r2 = getRectShape(ps2)

  if (r1.minX > r2.maxX || r1.minY > r2.maxY || r2.minX > r1.maxX || r2.minY > r1.maxY) {
    return false
  }
  // quick check end

  // possible rect
  let collideRect = getCollideRect(r1, r2)

  // if point inside shapes, return point
  ctx.drawPathByPoints(ps2)
  for (let i = 0; i < ps1.length; i++) {
    let p = ps1[i]
    if (pointInRect(p, collideRect) && ctx.isPointInPath(p.x, p.y)) { return p }
  }

  ctx.drawPathByPoints(ps1)
  for (let i = 0; i < ps2.length; i++) {
    let p = ps2[i]
    if (pointInRect(p, collideRect) && ctx.isPointInPath(p.x, p.y)) { return p }
  }
  // points check end

  // lines check
  for (let i = 0; i < ps1.length - 1; i++) { // bcz we had checked the points, ignore the last line
    let p1 = ps1[i]
    let p2 = ps1[i + 1]
    for (let j = 0; j < ps2.length - 1; j++) {
      let p3 = ps2[j]
      let p4 = ps2[j + 1]

      let p = lineCollideLine(p1, p2, p3, p4)
      if (p) return p
    }
  }

  return false
}

function getCollideRect (r1, r2) {
  return {
    minX: r1.minX > r2.minX ? r1.minX : r2.minX,
    minY: r1.minY > r2.minY ? r1.minY : r2.minY,
    maxX: r1.maxX < r2.maxX ? r1.maxX : r2.maxX,
    maxY: r1.maxY < r2.maxY ? r1.maxY : r2.maxY
  }
}

function lineCollideLine (p1, p2, p3, p4) {
  let x1 = p1.x
  let x2 = p2.x
  let x3 = p3.x
  let x4 = p4.x

  let y1 = p1.y
  let y2 = p2.y
  let y3 = p3.y
  let y4 = p4.y

  // quick check
  if (Math.min(x1, x2) > Math.max(x3, x4) ||
      Math.min(y1, y2) > Math.max(y3, y4) ||
      Math.max(x1, x2) < Math.min(x3, x4) ||
      Math.max(y1, y2) < Math.min(y3, y4)) { return false }

  // same slope rate
  if ((y1 - y2) * (x3 - x4) === (x1 - x2) * (y3 - y4)) { return false }

  if (cross(p3, p2, p3, p4) * cross(p3, p4, p3, p1) < 0 ||
    cross(p1, p4, p1, p2) * cross(p1, p2, p1, p3) < 0) { return false }

  // get collide point
  let b1 = (y2 - y1) * x1 + (x1 - x2) * y1
  let b2 = (y4 - y3) * x3 + (x3 - x4) * y3
  let D = (x2 - x1) * (y4 - y3) - (x4 - x3) * (y2 - y1)
  let D1 = b2 * (x2 - x1) - b1 * (x4 - x3)
  let D2 = b2 * (y2 - y1) - b1 * (y4 - y3)

  return {
    x: D1 / D,
    y: D2 / D
  }
}

function cross (p1, p2, p3, p4) {
  return (p2.x - p1.x) * (p4.y - p3.y) - (p2.y - p1.y) * (p4.x - p3.x)
}

function max (a, b) { return Math.max(a, b) }
function min (a, b) { return Math.min(a, b) }

function getRectShape (ps) {
  let xs = ps.map(p => p.x)
  let ys = ps.map(p => p.y)

  return {
    minX: xs.reduce(min),
    maxX: xs.reduce(max),
    minY: ys.reduce(min),
    maxY: ys.reduce(max)
  }
}

function pointInRect (p, r) {
  return r.minX <= p.x && p.x <= r.maxX &&
    r.minY <= p.y && p.y <= r.maxY
}

function pointInShape (p, shape) {
  let ps = shape.points
  if (ps.length < 3) return false

  let rect = getRectShape(ps)
  if (!pointInRect(p, rect)) { return false }

  ctx.drawPathByPoints(ps)
  if (ctx.isPointInPath(p.x, p.y)) { return p }

  return false
}

export { collide, pointInShape }
