import {forEach} from 'ramda'
import {createDocumentFragment, createElement, innerText} from '../view/dom'

const px = x => `${x}px`

export default (words, containerEl) => {
  const documentFragment = createDocumentFragment()
  forEach(({color, label, size, x, y}) => {
    const el = innerText(label, createElement('span'))
    documentFragment.appendChild(el)
    el.style.position = 'absolute'
    el.style.fontSize = px(size)
    el.style.color = color
    el.style.bottom = px(y)
    el.style.left = px(x)
  }, words)
  containerEl.appendChild(documentFragment)
}
