import {compose, head, last, map, sortBy, sum, values} from 'ramda'
import {createElement, innerText} from './view/dom'
import arrangeInCloud from './utils/arrangeInCloud'
import color from './utils/color'
import quantizeLogarithmically from './utils/quantizeLogarithmically'

export default (topics, wordCloudContainerEl) => {
  const sortedTopics = sortBy(a => -a.volume, topics)
  const size = quantizeLogarithmically(
    6,
    last(sortedTopics).volume,
    head(sortedTopics).volume
  )
  const dimensions = str => {
    const el = wordCloudContainerEl
      .appendChild(innerText(str, createElement('span')))
    const {width, height} = el.getBoundingClientRect()
    wordCloudContainerEl.removeChild(el)
    return {width, height}
  }
  const createModel = compose(
    arrangeInCloud,
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
        size: size(volume),
        label,
        totalMentions: sum(values(sentiment)),
        width
      }
    })
  )
  return createModel(sortedTopics)
}
