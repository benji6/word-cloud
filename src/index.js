import {querySelector} from './view/dom'
import {topics} from './data/topics'
import createModel from './model/createModel'
import renderWordCloud from './view/renderWordCloud'
import computeTextDimensions from './view/computeTextDimensions'

const wordCloudContainerEl = querySelector('.js-word-cloud')

renderWordCloud(
  createModel({
    topics,
    computeTextDimensions: computeTextDimensions(wordCloudContainerEl),
    containerHeight: wordCloudContainerEl.clientHeight,
    containerWidth: wordCloudContainerEl.clientWidth
  }),
  wordCloudContainerEl
)
