import test from 'ava'
import 'babel-core/register'
import createModel from './createModel'

const topics = [
  {
    label: 'test topic 1',
    volume: 50,
    sentiment: {
      negative: 3,
      neutral: 133,
      positive: 29
    },
    sentimentScore: 165
  },
  {
    label: 'test topic 2',
    volume: 100,
    sentiment: {
      neutral: 46,
      positive: 2
    },
    sentimentScore: 54
  }
]

test('createModel', t => {
  const model = createModel({
    topics,
    computeTextDimensions: _ => ({height: 10, width: 10}),
    containerHeight: 100,
    containerWidth: 100
  })
  t.same(model[0], {
    color: 'gray',
    height: 10,
    label: 'test topic 2',
    negativeMentions: 0,
    neutralMentions: 46,
    positiveMentions: 2,
    size: 5,
    totalMentions: 48,
    x: 45,
    y: 45,
    width: 10
  })
})
