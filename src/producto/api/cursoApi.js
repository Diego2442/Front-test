import axios from 'axios'

const productoApi = axios.create({
    //baseURL: import.meta.env.VITE_API_URL_PRODUCTO
    baseURL: `https://backend-test-pa4s.onrender.com/api/product/`
})

export default productoApi