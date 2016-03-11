import {compose, flip, map, multiply} from 'ramda'

export default compose(
  flip(map)([1, -1]),
  multiply,
  Math.sqrt
)
