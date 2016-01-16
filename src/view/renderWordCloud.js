import {compose, forEach, head, partial} from 'ramda'
import {
  addClass,
  createDocumentFragment,
  createElement,
  setBottom,
  setLeft,
  setOnClick,
  textContent
} from '../view/dom'
import renderMetaData from './renderMetaData'

export default (words, wordCloudEl) => {
  const documentFragment = createDocumentFragment()

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
    setBottom(y),
    setLeft(x),
    addClass(`word-cloud__word--size--${size}`),
    addClass(`word-cloud__word--${color}`),
    addClass('word-cloud__word'),
    documentFragment.appendChild.bind(documentFragment),
    textContent(label)
  )(createElement('button')), words)

  wordCloudEl.appendChild(documentFragment)
}
