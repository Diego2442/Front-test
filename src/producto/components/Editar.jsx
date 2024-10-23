import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { modalToogle } from '../../store/producto/productoSlice'
import { startActualizarProducto } from '../../store/producto/thuks'
const initialData = {
    nombre:''
}

export const Editar = () => {
    const dispatch = useDispatch()
    const {productoSeleccionado} = useSelector(state => state.producto_state)
    
    const {nombre, onInputChange} = useForm(initialData)

    const onSubmit = (evento) =>{
        evento.preventDefault()
        if(nombre.trim().length < 1){return}
        console.log('correcto')
        dispatch(startActualizarProducto(nombre,productoSeleccionado.id))
        dispatch(modalToogle())
    }

    const onClick = () =>{
        dispatch(modalToogle())
    }

  return (
    <div x-show="isOpen" 
        x-transition:enter="transition duration-300 ease-out"
        x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
        x-transition:leave="transition duration-150 ease-in"
        x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
        x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        className="fixed inset-0 z-10 overflow-y-auto" 
        aria-labelledby="modal-title" role="dialog" aria-modal="true"
    >
    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                    <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                        Edit
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                       Editar el producto {productoSeleccionado&&productoSeleccionado.nombre}
                    </p>

                    <form className="mt-4" action="#" onSubmit={onSubmit}>
                        <label className="text-sm text-gray-700 dark:text-gray-200">
                            ID
                        </label>

                        <label className="block mt-3">
                            <input type="text" name="id" value={productoSeleccionado&&productoSeleccionado.id} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" disabled/>
                        </label>

                        <label className="block mt-3" >
                            <input type="text" name="nombre" onChange={onInputChange} value={nombre} id="nombre" placeholder="Nuevo nombre producto.." className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-blue-400 dark:focus:border-blue-300" />
                        </label>

                        <label className="block mt-3">
                            <input type="text" name="slug" id="slug" value={productoSeleccionado&&productoSeleccionado.slug} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" disabled/>
                        </label>


                        <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                            <button type="button" onClick={onClick} className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                Cancel
                            </button>

                            <button type="submit" className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                Actualizar
                            </button>
                        </div>
                    </form>
                </div>
        </div>
        </div>
  )
}
