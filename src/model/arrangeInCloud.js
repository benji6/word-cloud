import {
  append,
  compose,
  curry,
  divide,
  filter,
  flip,
  head,
  last,
  map,
  multiply,
  reduce,
  transduce
} from 'ramda'
import collidesWithAnotherRectangle from './collidesWithAnotherRectangle'
import collidesWithContainer from './collidesWithContainer'
import fermatsSpiral from '../utils/fermatsSpiral'
import goldenAngle from '../data/goldenAngle'
import hypoteneuse from '../utils/hypoteneuse'
import polarToCartesian from '../utils/polarToCartesian'

const mapDivideBy2 = map(flip(divide)(2))
const placeCenter = ({x, y, rectangle}) => ({
  ...rectangle,
  x: x - rectangle.width / 2,
  y: y - rectangle.height / 2
})

// attempt to place all rectangles as close to center as possible
// without colliding with sides of container or other rectangles
// and following Fermat's Spiral outwards
// complete when no rectangles remain or positioning rules can no longer be met
export default curry((containerDimensions, rectangles) => {
  const {containerHeight, containerWidth} = containerDimensions
  const scalingFactor = last(rectangles).height
  const [centerX, centerY] = mapDivideBy2([containerWidth, containerHeight])
  const shiftOriginToBottomLeft = ({x, y}) => ({x: x + centerX, y: y + centerY})
  const maxRadius = hypoteneuse([centerX, centerY])
  const createNewRectangle = curry((theta, rectangle, r) => placeCenter({
    ...shiftOriginToBottomLeft(polarToCartesian({r, theta})),
    rectangle
  }))

  return reduce(
    (acc, rectangle) => (function recur (theta) {
      const radii = map(multiply(scalingFactor), fermatsSpiral(theta))
      if (head(radii) > maxRadius) return acc
      const validRectangle = head(transduce(
        compose(
          map(createNewRectangle(theta, rectangle)),
          filter(rect => !collidesWithAnotherRectangle(rect, acc)),
          filter(rect => !collidesWithContainer(rect, containerDimensions))
        ),
        flip(append),
        [],
        radii
      ))
      return validRectangle
        ? append(validRectangle, acc)
        : recur(theta + goldenAngle)
    }(0)),
    [],
    rectangles
  )
})
