import {querySelector} from './view/dom'
import {topics} from './data/topics'
import createModel from './model/createModel'
import renderWordCloud from './view/renderWordCloud'

const wordCloudContainerEl = querySelector('.js-word-cloud-container')

renderWordCloud(createModel(topics, wordCloudContainerEl), wordCloudContainerEl)
console.log(createModel(topics, wordCloudContainerEl))
