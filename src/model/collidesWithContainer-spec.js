import test from 'ava'
import 'babel-core/register'
import collides from './collidesWithContainer'

const testContainer = {containerHeight: 200, containerWidth: 200}

test('collides - collision with container', t => {
  t.false(collides({
    x: 0,
    y: 0,
    width: 10,
    height: 10
  }, testContainer))
  t.true(collides({
    x: -1,
    y: 0,
    width: 10,
    height: 10
  }, testContainer))
  t.true(collides({
    x: 0,
    y: -1,
    width: 10,
    height: 10
  }, testContainer))
  t.false(collides({
    x: 190,
    y: 190,
    width: 10,
    height: 10
  }, testContainer))
  t.true(collides({
    x: 191,
    y: 190,
    width: 10,
    height: 10
  }, testContainer))
  t.true(collides({
    x: 190,
    y: 191,
    width: 10,
    height: 10
  }, testContainer))
})
