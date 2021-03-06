import axios from 'axios'

import { updateAuthorisationHeader } from '../../axios/axios'

import { ACTION_TYPES as AT } from '../actionTypes'

const API_KEY = 'AIzaSyBNG3hhoi-Uah6CL-XpbGbC27lzTUKzMAQ'

const logUserIn = userId => ({
	type: AT.AUTH_LOGIN,
	payload: {
		isLoggedIn: true,
		isAdmin: true,
		userId: userId
	}
})
const authStart = () => ({ type: AT.AUTH_START })
const cleanError = () => ({ type: AT.AUTH_CLEAN_ERROR })
const setError = error => ({ type: AT.AUTH_SET_ERROR, payload: error })
const authFinish = () => ({ type: AT.AUTH_FINISH })

export const logout = () => {
	removeUserDataFromStorage()
	updateAuthorisationHeader()
	return { type: AT.AUTH_LOGOUT, payload: { isLoggedIn: false, isAdmin: false, userId: null } }
}

// registration & login
export const onHandleLogin = (email, password) => dispatch => {
	const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY
	dispatch(authStart())
	dispatch(cleanError())
	// request handle
	axios
		.post(url, {
			email,
			password,
			returnSecureToken: true
		})
		.then(({ data }) => {
			storeUserDataInStorage(data.idToken, data.expiresIn, data.localId)
			updateAuthorisationHeader(data.idToken)
			dispatch(logUserIn(data.localId))
			dispatch(authFinish())
		})
		.catch(err => {
			const { error } = err.response.data
			dispatch(setError(error))
			dispatch(authFinish())
		})
}

const storeUserDataInStorage = (idToken, expiresIn, userId) => {
	localStorage.setItem('token', idToken)
	const expirationDate = new Date(Date.now() + expiresIn * 1000)
	localStorage.setItem('expirationDate', expirationDate)
	localStorage.setItem('userId', userId)
}

const getUserDataFromStorage = () => {
	const r = {
		token: localStorage.getItem('token') || null,
		expirationDate: localStorage.getItem('expirationDate') || null,
		localId: localStorage.getItem('userId') || null
	}
	if (!r.token || !r.expirationDate || !r.localId) return null
	else return r
}

const removeUserDataFromStorage = () => {
	localStorage.removeItem('expirationDate')
	localStorage.removeItem('token')
	localStorage.removeItem('userId')
}

export const registerUser = (email, password) => async dispatch => {
	try {
		dispatch(authStart())
		dispatch(cleanError())
		console.log('[registerUser]', email, password)
		const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY
		const responce = await axios.post(url, {
			email,
			password,
			returnSecureToken: true
		})
		console.log('[registerUser][response]', responce)
		const { data } = responce
		storeUserDataInStorage(data.idToken, data.expiresIn, data.localId)
		updateAuthorisationHeader(data.idToken)
		dispatch(logUserIn(data.localId))
		dispatch(authFinish())
	} catch (err) {
		const { error } = err.response.data
		dispatch(setError(error))
		dispatch(authFinish())
	}
}

export const autoUserAuthentication = () => async dispatch => {
	try {
		const userData = getUserDataFromStorage()
		if (!userData) return dispatch(logout())
		const expiresIn = new Date(userData.expirationDate)
		console.log(expiresIn, new Date())
		if (expiresIn > new Date()) {
			updateAuthorisationHeader(userData.token)
			dispatch(logUserIn(userData.localId))
		} else {
			dispatch(logout())
		}
	} catch (error) {
		console.log('[autoUserAuthentication]', error)
	}
}
