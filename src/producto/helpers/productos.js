import { useDispatch } from "react-redux"
import productoApi from "../api/cursoApi"

export const cargarProductos = async()=>{
    const res = await productoApi.get('list_product')
    //console.log(res)
    return res
}

export const crearProductos = async(nombre)=>{
    const body = {nombre}
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    try {
        const res = await productoApi.post('create_product', body, config)
        if(res.status == 201){
            alert('Agregado con éxito')
        }
        console.log(res)
        return res
    } catch (error) {
       alert('Error')
    }
}

export const actualizarProductos = async(nombre,id)=>{
    const body = {nombre}
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    try {
        const res = await productoApi.put(`update_product/${id}`, body, config)
        if(res.status == 200){
            alert('Editado con éxito')
        }
        console.log(res)
        return res
    } catch (error) {
       alert('Error al actualizar')
    }
}

export const eliminarProductos = async(id) => {

    try {
        const res = await productoApi.delete(`delete_product/${id}`)
        alert('Eliminado con exito')
        /* console.log(res) */
        return res
    } catch (error) {
        alert('Error al eliminar')
    }
}