import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://tinder-backend-flame.vercel.app'
})

export default instance