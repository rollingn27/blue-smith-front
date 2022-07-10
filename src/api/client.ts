import axios from 'axios'

const client = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8080/',  
})

export default client;

