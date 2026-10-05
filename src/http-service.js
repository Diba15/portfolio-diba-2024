import axios from 'axios'

const httpService = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://port-api-liard.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default httpService
