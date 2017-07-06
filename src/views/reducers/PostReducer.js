import { FETCH_POSTS, CREATE_POST } from '../actions'
import _ from 'lodash'

export default (state = {}, action) => {
	switch(action.type) {
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, '_id')
		case CREATE_POST:
			return {...state, [action.payload._id]: action.payload.data}
		default:
			return state
	}
}