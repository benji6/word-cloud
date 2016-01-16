import {forEach} from 'ramda'
import {createDocumentFragment, createElement, innerText} from '../view/dom'

const px = x => `${x}px`

export default (words, containerEl) => {
  const documentFragment = createDocumentFragment()
  forEach(({label, x, y}) => {
    const el = innerText(label, createElement('span'))
    documentFragment.appendChild(el)
    el.style.position = 'absolute'
    el.style.bottom = px(y)
    el.style.left = px(x)
  }, words)
  containerEl.appendChild(documentFragment)
}
