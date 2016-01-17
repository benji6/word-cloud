const notContained = (rect, {containerHeight, containerWidth}) =>
  rect.x < 0 ||
  rect.x + rect.width > containerWidth ||
  rect.y < 0 ||
  rect.y + rect.height > containerHeight

export default (testRectangle, {containerHeight, containerWidth}) =>
  notContained(testRectangle, {containerHeight, containerWidth})
