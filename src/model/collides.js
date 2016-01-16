import {any, curry} from 'ramda'

const intersects = curry((rectA, rectB) =>
  rectA.x + rectA.width >= rectB.x &&
  rectA.x <= rectB.x + rectB.width &&
  rectA.y + rectA.height >= rectB.y &&
  rectA.y <= rectB.y + rectB.width)

export default (testRectangle, rectangles) =>
  any(intersects(testRectangle), rectangles)
