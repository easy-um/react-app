import { combineReducers } from 'redux'

import posts from './reducers/posts'
import auth from './reducers/auth'

export const rootReducer = combineReducers({
	posts: posts,
	auth: auth
})
