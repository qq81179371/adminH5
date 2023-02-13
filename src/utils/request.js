import axios from 'axios'

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})


service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    Message({
      message: '连接超时,请刷新页面',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
