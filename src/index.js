import {head, last, map, sortBy, sum, values} from 'ramda'
import {topics} from './topics'
import {quantizeLogarithmically} from './helpers'

const sortedTopics = sortBy(a => -a.volume, topics)
const size = quantizeLogarithmically(
  6,
  last(sortedTopics).volume,
  head(sortedTopics).volume
)
const color = x => x > 60 ? 'green' : x < 40 ? 'red' : 'gray'

const createModel = map(({
  label,
  sentiment,
  sentiment: {negative = 0, neutral = 0, positive = 0},
  sentimentScore,
  volume
}) => ({
  color: color(sentimentScore),
  negativeMentions: negative,
  neutralMentions: neutral,
  positiveMentions: positive,
  size: size(volume),
  topic: label,
  totalMentions: sum(values(sentiment))
}))

console.log(createModel(sortedTopics))
