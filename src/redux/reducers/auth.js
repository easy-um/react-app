import { ACTION_TYPES as AT } from '../actionTypes'

const initialState = {
	isLoading: false,
	isLoggedIn: false,
	isAdmin: false
}

const reducer = (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case AT.AUTH_LOGIN:
			return { ...state, ...payload }
		case AT.AUTH_LOGOUT:
			return { ...state, ...payload }
		case AT.AUTH_START:
			return { ...state, isLoading: true }
		case AT.AUTH_FINISH:
			return { ...state, ...payload, isLoading: false }
		default:
			return state
	}
}

export default reducer
