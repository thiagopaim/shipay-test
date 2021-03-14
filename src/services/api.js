import axios from 'axios'

const url = process.env.NEXT_PUBLIC_API
const axiosInstance = axios.create({ baseURL: url })

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint)
  },
}
