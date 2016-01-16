import {curry} from 'ramda'
const {floor, log} = Math

export default curry((
  resolution,
  min,
  max,
  x
) => floor(resolution * log(x - min + 1) / log(max - min + 2)))
