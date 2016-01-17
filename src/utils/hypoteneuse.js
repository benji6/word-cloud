import {compose, curry, flip, map, sum} from 'ramda'
const {sqrt} = Math
const pow = curry(flip(Math.pow))
export default compose(sqrt, sum, map(pow(2)))
