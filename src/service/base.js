import axios from 'axios'
import axiosRetry from 'axios-retry'

axiosRetry(axios, { retries: 5 })

const ERR_OK = 0
const baseURL = process.env.NODE_ENV === 'production' ? 'https://api.lizhigang.cn/music/' : '/'

axios.defaults.baseURL = baseURL

export function get(url, params) {
  return axios.get(url, {
    params
  }).then((res) => {
    const serverData = res.data
    if (serverData.code === ERR_OK) {
      return serverData.result
    } else {
      return serverData
    }
  }).catch((e) => {
    console.log(e)
  })
}
