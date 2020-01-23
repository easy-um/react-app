import { ACTION_TYPES as AT } from '../actionTypes'

const logUserIn = () => ({ type: AT.AUTH_LOGIN, payload: { isLoggedIn: true, isAdmin: false } })

export const logout = () => ({ type: AT.AUTH_LOGOUT, payload: { isLoggedIn: false, isAdmin: false } })

export const onHandleLogin = (login, password) => {
	const admin = { email: 'admin', password: '123' }
	if (login === admin.email && password === admin.password) {
		return logUserIn()
	}
}
