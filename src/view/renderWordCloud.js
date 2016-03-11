import {compose, forEach, head, partial} from 'ramda'
import {
  addClass,
  createDocumentFragment,
  createElement,
  animateBottom,
  animateLeft,
  setOnClick,
  textContent
} from '../view/dom'
import renderMetaData from './renderMetaData'

export default (words, wordCloudEl) => {
  const documentFragment = createDocumentFragment()
  const {clientHeight, clientWidth} = wordCloudEl

  renderMetaData(head(words))

  forEach(({
    color,
    label,
    negativeMentions,
    neutralMentions,
    positiveMentions,
    size,
    totalMentions,
    x,
    y
  }) => compose(
    setOnClick(partial(renderMetaData, [{
      label,
      negativeMentions,
      neutralMentions,
      positiveMentions,
      totalMentions
    }])),
    animateBottom(clientHeight / 2, y),
    animateLeft(clientWidth / 2, x),
    addClass(`word-cloud__word--size--${size}`),
    addClass(`word-cloud__word--${color}`),
    addClass('word-cloud__word'),
    documentFragment.appendChild.bind(documentFragment),
    textContent(label)
  )(createElement('button')), words)

  wordCloudEl.appendChild(documentFragment)
}
