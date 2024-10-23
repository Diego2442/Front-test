import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { startCrearProducto } from '../../store/producto/thuks'

const initialData={
    nombre:''
}

export const Crear = () => {

    const dispatch = useDispatch()

    const onSubmit = (evento) =>{
        evento.preventDefault()
        console.log('esta en el form')
        if(nombre.trim().length < 1){return}
        dispatch(startCrearProducto(nombre))
        onCleanForm()
    }

    const {nombre, onInputChange, onCleanForm} = useForm(initialData)

  return (
    <div className="px-6 items-center justify-center pb-6 md:py-0 md:w-1/2">
       
        <form className='py-6' onSubmit={onSubmit}>
            <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Crear <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">Productos</span></h2>
            
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
            <div>
                <label className="text-gray-700 dark:text-gray-200">Nombre Producto</label>
                <input type="text" name='nombre' value={nombre} onChange={onInputChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Añadir</button>
        </div>
        </form>
    </div>
  )
}
