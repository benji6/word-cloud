import test from 'ava'
import 'babel-core/register'
import sortTopics from './sortTopics'

const topics = [
  {volume: 50},
  {volume: 40},
  {volume: 100},
  {volume: 64}
]

test('sortTopics', t => {
  t.same(sortTopics(topics), [
    {volume: 100},
    {volume: 64},
    {volume: 50},
    {volume: 40}
  ])
})
