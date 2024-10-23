import axios from 'axios'

const productoApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL_PRODUCTO
})

export default productoApi