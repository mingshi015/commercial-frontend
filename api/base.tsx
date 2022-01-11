import applyCaseMiddleware from 'axios-case-converter'
import axios from 'axios'

const instance = applyCaseMiddleware(
  axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
      'Content-Type': 'application/json',
    },
  })
)

export default instance
