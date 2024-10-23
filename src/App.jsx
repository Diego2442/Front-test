import { Route, Routes } from "react-router-dom"
import { BaseLayout } from "./layout/BaseLayout"
import { ProductoRouter } from "./producto/routes/ProductoRouter"

function App() {
 

  return (
    <BaseLayout>
      <Routes>
        <Route path='*' element={<ProductoRouter/>} />
        <Route path='productos' element={<ProductoRouter/>}/>
        <Route path='/' element={<ProductoRouter/>} />
      </Routes>
    </BaseLayout>
  )
}

export default App
