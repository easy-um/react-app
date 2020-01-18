import axios from 'axios'

import { isJWT } from '../util/token'

const axiosInstance = axios.create({
	// baseURL: ...
})

let token = localStorage.getItem('token')

const updateAxiosToken = () => {
	if (isJWT(token)) {
		axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
	} else {
		axiosInstance.defaults.headers.common['Authorization'] = null
	}
}

// updateAxiosToken()

export { axiosInstance, updateAxiosToken }
