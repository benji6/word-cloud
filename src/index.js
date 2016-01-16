import {querySelector} from './view/dom'
import {topics} from './data/topics'
import computeTextDimensions from './view/computeTextDimensions'
import createModel from './model/createModel'
import renderWordCloud from './view/renderWordCloud'

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
