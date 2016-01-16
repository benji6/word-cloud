import {forEach} from 'ramda'
import {createDocumentFragment, createElement, innerText} from '../view/dom'

const rems = x => `${x}rem`

export default (words, containerEl) => {
  const documentFragment = createDocumentFragment()
  forEach(({label, x, y}) => {
    const el = innerText(label, createElement('span'))
    documentFragment.appendChild(el)
    el.style.position = 'absolute'
    el.style.top = rems(y)
    el.style.left = rems(x)
  }, words)
  containerEl.appendChild(documentFragment)
}
