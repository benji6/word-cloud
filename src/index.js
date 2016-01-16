import {querySelector} from './view/dom'
import {topics} from './topics'
import model from './model'
import renderWordCloud from './view/renderWordCloud'

const wordCloudContainerEl = querySelector('.js-word-cloud-container')

renderWordCloud(model(topics, wordCloudContainerEl), wordCloudContainerEl)
console.log(model(topics, wordCloudContainerEl))
