import {compose, head, last, map, sortBy, sum, values} from 'ramda'
import arrangeInCloud from './arrangeInCloud'
import color from './color'
import quantizeLogarithmically from '../utils/quantizeLogarithmically'

const sortTopics = sortBy(topic => -topic.volume)

export default ({
  topics,
  computeTextDimensions,
  containerHeight,
  containerWidth
}) => {
  const sortedTopics = sortTopics(topics)
  const maxVolume = head(sortedTopics).volume
  const minVolume = last(sortedTopics).volume
  const computeSize = compose(
    x => 6 * x + 12,
    quantizeLogarithmically(6, minVolume, maxVolume)
  )

  const createModel = compose(
    arrangeInCloud({
      containerHeight,
      containerWidth
    }),
    map(({
      label,
      sentiment,
      sentiment: {negative = 0, neutral = 0, positive = 0},
      sentimentScore,
      volume
    }) => {
      const size = computeSize(volume)
      const {height, width} = computeTextDimensions(label, size)
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
