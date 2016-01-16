import test from 'ava'
import 'babel-core/register'
import color from './color'

test('color', t => {
  t.is(color(39), 'red')
  t.is(color(40), 'gray')
  t.is(color(60), 'gray')
  t.is(color(61), 'green')
})
