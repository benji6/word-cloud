import {compose, curry} from 'ramda'
import {
  createElement,
  innerText,
  setFontSize,
  setPosition,
  setVisibility
} from '../view/dom'

// sadly to get the dimensions we have to append to the DOM
// but we do that invisibly and without triggering reflows
export default curry((container, str, size) => {
  const el = compose(
    innerText(str),
    setFontSize(size),
    setPosition('fixed'),
    setVisibility('hidden')
  )(createElement('span'))

  container.appendChild(el)
  const {width, height} = el.getBoundingClientRect()
  container.removeChild(el)
  return {width, height}
})
