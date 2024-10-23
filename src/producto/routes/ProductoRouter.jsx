import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Formulario } from '../pages/Formulario'

export const ProductoRouter = () => {
  return (
    <Routes>
        <Route path='' element={<Formulario/>}/>
    </Routes>
  )
}
