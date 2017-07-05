import { combineReducers } from 'redux'
import posts from './PostReducer.js'

const rootReducer = combineReducers({
	posts
})

export default rootReducer