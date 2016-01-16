import {sortBy} from 'ramda'
export default sortBy(topic => -topic.volume)
