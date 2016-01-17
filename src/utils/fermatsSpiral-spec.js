import test from 'ava'
import 'babel-core/register'
import fermatsSpiral from './fermatsSpiral'

test('fermatsSpiral', t => {
  t.same(fermatsSpiral(1), [1, -1])
  t.same(fermatsSpiral(4), [2, -2])
  t.same(fermatsSpiral(16), [4, -4])
})
