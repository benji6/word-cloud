import {head, last, map, sortBy, sum, values} from 'ramda'
import {topics} from './topics'
import color from './utils/color'
import quantizeLogarithmically from './utils/quantizeLogarithmically'
import {
  createElement,
  getElementById,
  innerText
} from './utils/domTools'

const sortedTopics = sortBy(a => -a.volume, topics)
const size = quantizeLogarithmically(
  6,
  last(sortedTopics).volume,
  head(sortedTopics).volume
)

const wordCloudContainerEl = getElementById('word-cloud-container')
const dimensions = str => {
  const el = wordCloudContainerEl
    .appendChild(innerText(str, createElement('span')))
  const {width, height} = el.getBoundingClientRect()
  wordCloudContainerEl.removeChild(el)
  return {width, height}
}

const createModel = map(({
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
    topic: label,
    totalMentions: sum(values(sentiment)),
    width
  }
})

console.log(createModel(sortedTopics))
