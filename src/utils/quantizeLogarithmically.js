import {curry} from 'ramda'

const {floor, log} = Math

export default curry((resolution, min, max, x) =>
  Math.min(floor(resolution * log(x) / (log(max) - log(min))), resolution))
