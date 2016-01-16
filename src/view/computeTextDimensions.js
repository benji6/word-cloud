import {compose, curry} from 'ramda'
import {
  addClass,
  createElement,
  setPosition,
  setVisibility,
  textContent
} from '../view/dom'

// sadly to get the dimensions we have to append to the DOM
// but we do that invisibly and without triggering reflows
export default curry((container, str, size) => {
  const el = compose(
    textContent(str),
    addClass(`word-cloud__word--size--${size}`),
    addClass('word-cloud__word'),
    setPosition('fixed'),
    setVisibility('hidden')
  )(createElement('button'))

  container.appendChild(el)
  const {width, height} = el.getBoundingClientRect()
  container.removeChild(el)
  return {width, height}
})
