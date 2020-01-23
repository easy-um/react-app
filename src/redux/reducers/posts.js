import { ACTION_TYPES as AT } from '../actionTypes'

const initialState = {
	posts: []
}

/**
 *
 * @param {object} state
 * @param { {type: string, payload: any} } action
 */
const reducer = (state = initialState, action) => {
	const { type, payload } = action
	if (type === AT.UPDATE_POSTS) return { ...state, posts: payload.posts }
	if (type === AT.DELETE_POST) return { ...state, posts: state.posts.filter(post => post.id !== payload.id) }
	return state
}

export default reducer
