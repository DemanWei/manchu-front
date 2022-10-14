import axios from 'axios'

const request = axios.create({
    baseURL: '/api',
    timeout: 30 * 1000
})

export default request
