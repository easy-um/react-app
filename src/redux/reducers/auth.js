import { ACTION_TYPES as AT } from '../actionTypes'

const initialState = {
	isLoading: false,
	isLoggedIn: false,
	isAdmin: false,
	error: null
}

const reducer = (state = initialState, action) => {
	const { type, payload } = action
	console.log('[redux]', type, payload)
	switch (type) {
		case AT.AUTH_LOGIN:
			return { ...state, ...payload }
		case AT.AUTH_LOGOUT:
			return { ...state, ...payload }
		case AT.AUTH_START:
			return { ...state, isLoading: true }
		case AT.AUTH_FINISH:
			return { ...state, ...payload, isLoading: false }
		case AT.AUTH_SET_ERROR:
			return { ...state, error: payload }
		case AT.AUTH_CLEAN_ERROR:
			return { ...state, error: null }
		default:
			return state
	}
}

export default reducer
