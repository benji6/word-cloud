import {append, curry, head, reduce, tail} from 'ramda'

const placeCenter = (x, y, shape) => ({
  ...shape,
  x: x - shape.width / 2,
  y: y - shape.height / 2
})

// place first rectangle in center of container
// attempt to place all subsequent rectangles as close to center as possible
// without colliding with sides of container or other rectangles
// complete when no rectangles remain or positioning rules can no longer be met
export default curry(({containerHeight, containerWidth}, rectangles) => {
  const centerX = containerWidth / 2
  const centerY = containerHeight / 2
  const firstRectangle = head(rectangles)
  return reduce(
    (acc, rectangle) => {
      return append(placeCenter(
        Math.random() * (containerWidth - rectangle.width) + rectangle.width / 2,
        Math.random() * (containerHeight - rectangle.height) + rectangle.height / 2,
        rectangle
      ), acc)
    },
    [placeCenter(centerX, centerY, firstRectangle)],
    tail(rectangles)
  )
})
