import axios from 'axios'
import appConfig from '../config'

axios.interceptors.request.use(
    config => {
        config.baseURL = appConfig.GITHUB_API
        return config
    },
    err => err
)

axios.interceptors.response.use(
    response => response,
    err => {
        console.error('API error')
        console.error(err)
        return err
    }
)

export default axios