import axios from 'axios'

const BASE_URL = 'https://randomuser.me/api'

export const publicRequest = axios.create({
baseURL:BASE_URL

})