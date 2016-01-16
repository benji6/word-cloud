import {curry} from 'ramda'
import {createElement, innerText} from '../view/dom'

// sadly to get the dimensions we have to append to the DOM
// but we do that invisibly and without triggering reflows
export default curry((container, str, size) => {
  const el = innerText(str, createElement('span'))
  el.style.fontSize = size + 'px'
  el.style.position = 'fixed'
  el.style.visibility = 'hidden'
  container.appendChild(el)
  const {width, height} = el.getBoundingClientRect()
  container.removeChild(el)
  return {width, height}
})
