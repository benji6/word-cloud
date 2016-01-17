import test from 'ava'
import 'babel-core/register'
import collides from './collidesWithAnotherRectangle'

const testRectangle = {
  x: 100,
  y: 100,
  width: 10,
  height: 10
}

test('collides - collision with other rectangles', t => {
  t.false(collides(testRectangle, [{
    x: 111,
    y: 100,
    width: 10,
    height: 10
  }]))
  t.true(collides(testRectangle, [{
    x: 110,
    y: 100,
    width: 10,
    height: 10
  }]))
  t.false(collides(testRectangle, [{
    x: 89,
    y: 100,
    width: 10,
    height: 10
  }]))
  t.true(collides(testRectangle, [{
    x: 90,
    y: 100,
    width: 10,
    height: 10
  }]))
  t.false(collides(testRectangle, [{
    x: 100,
    y: 89,
    width: 10,
    height: 10
  }]))
  t.true(collides(testRectangle, [{
    x: 100,
    y: 90,
    width: 10,
    height: 10
  }]))
  t.false(collides(testRectangle, [{
    x: 100,
    y: 111,
    width: 10,
    height: 10
  }]))
  t.true(collides(testRectangle, [{
    x: 100,
    y: 110,
    width: 10,
    height: 10
  }]))
})
