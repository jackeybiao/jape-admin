import axios from 'axios';
import { getToken } from './auth';
import { baseUrl } from '../config/config';

const service = axios.create({
  baseURL: baseUrl,
  timeout: 60000
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['token'] = getToken()
      config.headers["_"] = new Date().getTime()
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
