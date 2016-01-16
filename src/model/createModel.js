import {compose, head, last, map, sortBy, sum, values} from 'ramda'
import {createElement, innerText} from '../view/dom'
import arrangeInCloud from './arrangeInCloud'
import color from './color'
import quantizeLogarithmically from '../utils/quantizeLogarithmically'

const sortTopics = sortBy(topic => -topic.volume)

export default (topics, wordCloudContainerEl) => {
  const sortedTopics = sortTopics(topics)
  const maxVolume = head(sortedTopics).volume
  const minVolume = last(sortedTopics).volume
  const computeSize = compose(
    x => 6 * x + 12,
    quantizeLogarithmically(6, minVolume, maxVolume)
  )

  // sadly to get the dimensions we have to append to the DOM
  // but we do that invisibly and without triggering reflows
  const dimensions = (str, size) => {
    const el = innerText(str, createElement('span'))
    wordCloudContainerEl.appendChild(el)
    el.style.fontSize = size + 'px'
    el.style.position = 'fixed'
    el.style.visibility = 'hidden'
    const {width, height} = el.getBoundingClientRect()
    wordCloudContainerEl.removeChild(el)
    return {width, height}
  }

  const createModel = compose(
    arrangeInCloud({
      containerHeight: wordCloudContainerEl.clientHeight,
      containerWidth: wordCloudContainerEl.clientWidth
    }),
    map(({
      label,
      sentiment,
      sentiment: {negative = 0, neutral = 0, positive = 0},
      sentimentScore,
      volume
    }) => {
      const size = computeSize(volume)
      const {height, width} = dimensions(label, size)
      return {
        color: color(sentimentScore),
        height,
        negativeMentions: negative,
        neutralMentions: neutral,
        positiveMentions: positive,
        size,
        label,
        totalMentions: sum(values(sentiment)),
        width
      }
    })
  )
  return createModel(sortedTopics)
}
