import test from 'ava'
import 'babel-core/register'
import hypoteneuse from './hypoteneuse'

const {sqrt} = Math

test('hypoteneuse', t => {
  t.is(hypoteneuse([10, 10]), sqrt(200))
  t.is(hypoteneuse([3, 4]), 5)
  t.is(hypoteneuse([1, 1, 1]), sqrt(3))
})
