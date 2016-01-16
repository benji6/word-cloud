import {compose, forEach} from 'ramda'
import {
  addClass,
  createDocumentFragment,
  createElement,
  setBottom,
  setLeft,
  setOnClick,
  textContent
} from '../view/dom'

export default (words, wordCloudEl) => {
  const documentFragment = createDocumentFragment()
  forEach(({color, label, size, x, y}) => {
    const el = textContent(label, createElement('button'))
    documentFragment.appendChild(el)
    compose(
      setOnClick(_ => console.log(label)),
      setBottom(y),
      setLeft(x),
      addClass(`word-cloud__word--size--${size}`),
      addClass(`word-cloud__word--${color}`),
      addClass('word-cloud__word')
    )(el)
  }, words)
  wordCloudEl.appendChild(documentFragment)
}
