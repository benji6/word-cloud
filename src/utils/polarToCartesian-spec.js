import test from 'ava'
import {map} from 'ramda'
import 'babel-core/register'
import polarToCartesian from './polarToCartesian'

const {PI, round} = Math
const roundValues = map(round)

test('polarToCartesian', t => {
  t.same(
    roundValues(polarToCartesian({r: 1000, theta: 0})),
    {x: 1000, y: 0}
  )
  t.same(
    roundValues(polarToCartesian({r: 4000, theta: 0})),
    {x: 4000, y: 0}
  )
  t.same(
    roundValues(polarToCartesian({r: 1000, theta: PI / 2})),
    {x: 0, y: 1000}
  )
  t.same(
    roundValues(polarToCartesian({r: 4000, theta: PI / 2})),
    {x: 0, y: 4000}
  )
  t.same(
    roundValues(polarToCartesian({r: 1000, theta: PI})),
    {x: -1000, y: 0}
  )
  t.same(
    roundValues(polarToCartesian({r: 4000, theta: PI})),
    {x: -4000, y: 0}
  )
  t.same(
    roundValues(polarToCartesian({r: 1000, theta: PI * 1.5})),
    {x: 0, y: -1000}
  )
  t.same(
    roundValues(polarToCartesian({r: 4000, theta: PI * 1.5})),
    {x: 0, y: -4000}
  )
})
