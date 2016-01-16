import test from 'ava'
import 'babel-core/register'
import quantizeLogarithmically from './quantizeLogarithmically'

test('quantizeLogarithmically - is curried', t => {
  t.is(typeof quantizeLogarithmically(6), 'function')
  t.is(typeof quantizeLogarithmically(6, 0), 'function')
  t.is(typeof quantizeLogarithmically(6, 0, 64), 'function')
})

test('quantizeLogarithmically - works with negative values', t => {
  t.is(quantizeLogarithmically(6, -5, 5, -5), 0)
  t.is(quantizeLogarithmically(6, -5, 5, 5), 5)
})

test('quantizeLogarithmically - logarithmically quantizes a value', t => {
  t.is(quantizeLogarithmically(6, 2, 64, 2), 0)
  t.is(quantizeLogarithmically(6, 2, 64, 3), 1)
  t.is(quantizeLogarithmically(6, 2, 64, 4), 1)
  t.is(quantizeLogarithmically(6, 2, 64, 5), 2)
  t.is(quantizeLogarithmically(6, 2, 64, 8), 2)
  t.is(quantizeLogarithmically(6, 2, 64, 9), 3)
  t.is(quantizeLogarithmically(6, 2, 64, 16), 3)
  t.is(quantizeLogarithmically(6, 2, 64, 17), 4)
  t.is(quantizeLogarithmically(6, 2, 64, 32), 4)
  t.is(quantizeLogarithmically(6, 2, 64, 33), 5)
  t.is(quantizeLogarithmically(6, 2, 64, 64), 5)
})
