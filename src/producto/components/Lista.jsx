import React from 'react'
import { useDispatch } from 'react-redux'
import { modalToogle, seleccionarProducto } from '../../store/producto/productoSlice'
import { startEliminarProducto } from '../../store/producto/thuks'

export const Lista = ({productos}) => {
    const dispatch = useDispatch()
    const onClick = (id=null,nombre=null,slug=null) =>{
        dispatch(modalToogle())
        if(id&&nombre&&slug !== null){
            dispatch(seleccionarProducto({id,nombre,slug}))
        }
    }
    const onClickDelete = (id)=>{
        dispatch(startEliminarProducto(id))
    }

  return (
    <>
    <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
        <div className="px-6 py-6 md:px-8 md:py-6">
            <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Lista de <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">Productos</span></h2>

            
            {
                productos&&productos.map(
                    producto => (
                        <div key={producto.id} className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                            <button className="flex items-center justify-between w-full">
                                <h1 className="font-semibold text-gray-700 dark:text-white">{producto.nombre}</h1>

                                <span className="text-white bg-orange-600 rounded-md p-2 ms-4" onClick={() => onClick(producto.id,producto.nombre,producto.slug)}>
                                    Editar
                                </span>
                                <span onClick={() => onClickDelete(producto.id)} className="text-white bg-red-600 rounded-md p-2 ms-4">
                                    Eliminar
                                </span>
                            </button>
                        </div>
                    )
                )
            }


        </div>
    </div>
    </>
  )
}
