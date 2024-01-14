import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetalles } from './components/ItemDetalles/ItemDetalles';
import { ItemCategorias } from './components/ItemCategorias/ItemCategorias';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element= {<ItemListContainer greeting={'Solo por Hoy!!'}/>} />
          <Route path='/category/:categoryId' element= {<ItemCategorias />} />
          <Route path='/detail/:productId' element= {<ItemDetalles/>} />
          <Route path='*' element={<h1 className='text-center'> no hemos encontrado la pagina</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
