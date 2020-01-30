import axios from 'axios'

export const axiosInstance = axios.create({
	// options
	baseURL: 'https://easyum-75b5a.firebaseio.com/'
})

export const updateAuthorisationHeader = token => {
	if (!token) axiosInstance.defaults.headers.common['Authorization'] = null
	else axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
}
