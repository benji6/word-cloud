import {map} from 'ramda'
let i = 0
export default rectangles => {
  return map(rectangle => {
    return {...rectangle, x: i, y: i++}
  }, rectangles)
}
