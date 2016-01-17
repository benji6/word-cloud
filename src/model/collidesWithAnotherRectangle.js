import {any, curry} from 'ramda'

const rectanglesIntersect = curry((rectA, rectB) =>
  rectA.x + rectA.width >= rectB.x &&
  rectA.x <= rectB.x + rectB.width &&
  rectA.y + rectA.height >= rectB.y &&
  rectA.y <= rectB.y + rectB.height)

export default (testRectangle, rectangles) =>
  any(rectanglesIntersect(testRectangle), rectangles)
