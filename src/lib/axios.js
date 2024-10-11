import axios from 'axios'

const api = axios.create({
    baseURL: 'https://crm-vue-chi.vercel.app/'
})

export default api
