import {compose, flip, forEach, keys, map, pick, toPairs} from 'ramda'
import {querySelector, textContent} from '../view/dom'

const fieldsToRenderMapping = map(compose(flip(textContent), querySelector), {
  label: '.js-word-cloud-metadata__topic',
  negativeMentions: '.js-word-cloud-metadata__negative-mentions',
  neutralMentions: '.js-word-cloud-metadata__neutral-mentions',
  positiveMentions: '.js-word-cloud-metadata__positive-mentions',
  totalMentions: '.js-word-cloud-metadata__total-mentions'
})

export default compose(
  forEach(([key, val]) => fieldsToRenderMapping[key](val)),
  toPairs,
  pick(keys(fieldsToRenderMapping))
)
