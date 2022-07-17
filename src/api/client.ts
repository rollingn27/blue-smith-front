import axios from 'axios'

const client = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8080/',  
})

// const get = async () => {
//   try {
//     return await axios.get()
//   }d
  
// }
export default client;

