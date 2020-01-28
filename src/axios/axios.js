import axios from 'axios'

export const axiosInstance = axios.create({
    // options
    baseURL: 'https://easyum-75b5a.firebaseio.com/'
})