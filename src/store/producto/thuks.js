import { actualizarProductos, cargarProductos, crearProductos, eliminarProductos } from "../../producto/helpers/productos"
import { actualizarProducto, colocarProductos, crearProducto, eliminarProducto } from "./productoSlice"


export const startObtenerProductos = () =>{

    return async(dispatch)=>{
        const {data} = await cargarProductos()

        dispatch(colocarProductos(data))
    }
}

export const startCrearProducto = (nombre) =>{
    return async(dispatch)=>{
        const {data} = await crearProductos(nombre)

        dispatch(crearProducto(data))
    }
}

export const startActualizarProducto = (nombre,id)=>{
    return async(dispatch)=>{
        const {data} = await actualizarProductos(nombre,id)

        dispatch(actualizarProducto({nombre,id}))
    }
}

export const startEliminarProducto = (id) => {
    return async(dispatch)=>{
        const res = await eliminarProductos(id)
        
        dispatch(eliminarProducto({id}))
        
    }
}