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
  const computeSize = quantizeLogarithmically(6, minVolume, maxVolume)

  const dimensions = str => {
    const el = wordCloudContainerEl
      .appendChild(innerText(str, createElement('span')))
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
      const {height, width} = dimensions(label)
      return {
        color: color(sentiment),
        height,
        negativeMentions: negative,
        neutralMentions: neutral,
        positiveMentions: positive,
        size: computeSize(volume),
        label,
        totalMentions: sum(values(sentiment)),
        width
      }
    })
  )
  return createModel(sortedTopics)
}
