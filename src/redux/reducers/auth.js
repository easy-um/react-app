import { ACTION_TYPES as AT } from '../actionTypes'

const initialState = {
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
		default:
			return state
	}
}

export default reducer
