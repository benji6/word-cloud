import {compose, forEach} from 'ramda'
import {
  createDocumentFragment,
  createElement,
  innerText,
  setBottom,
  setColor,
  setFontSize,
  setLeft,
  setPosition
} from '../view/dom'

export default (words, containerEl) => {
  const documentFragment = createDocumentFragment()
  forEach(({color, label, size, x, y}) => {
    const el = innerText(label, createElement('span'))
    documentFragment.appendChild(el)
    compose(
      setBottom(y),
      setColor(color),
      setFontSize(size),
      setLeft(x),
      setPosition('absolute')
    )(el)
  }, words)
  containerEl.appendChild(documentFragment)
}
