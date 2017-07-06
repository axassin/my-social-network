import { combineReducers } from 'redux'
import posts from './PostReducer.js'
import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
	posts,
	form
})

export default rootReducer