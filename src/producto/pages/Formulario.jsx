import React, { useEffect } from 'react'
import { Lista } from '../components/Lista'
import { Crear } from '../components/Crear'
import { useDispatch, useSelector } from 'react-redux'
import { startObtenerProductos } from '../../store/producto/thuks'
import { Editar } from '../components/Editar'

export const Formulario = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(startObtenerProductos())
    }, [])
    
    const {productos, modalActivo} = useSelector((state) => state.producto_state)
  return (
    <section className="flex flex-col max-w-auto mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-auto">
    <Lista productos={productos}/>
    <Crear/>
    {modalActivo&&<Editar/>}
    </section>
  )
}
