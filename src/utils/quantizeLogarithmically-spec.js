import test from 'ava'
import 'babel-core/register'
import quantizeLogarithmically from './quantizeLogarithmically'

test('quantizeLogarithmically - is curried', t => {
  t.is(typeof quantizeLogarithmically(6), 'function')
  t.is(typeof quantizeLogarithmically(6, 0), 'function')
  t.is(typeof quantizeLogarithmically(6, 0, 64), 'function')
})

test('quantizeLogarithmically - logarithmically quantizes a value', t => {
  const quantize = quantizeLogarithmically(5, 2, 63)
  t.is(quantize(2), 1)
  t.is(quantize(3), 1)
  t.is(quantize(4), 2)
  t.is(quantize(7), 2)
  t.is(quantize(8), 3)
  t.is(quantize(15), 3)
  t.is(quantize(16), 4)
  t.is(quantize(31), 4)
  t.is(quantize(32), 5)
  t.is(quantize(63), 5)
})
