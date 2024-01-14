import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ContadorItem } from './components/Contador/ContadorItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetalles } from './components/ItemDetalles/ItemDetalles';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element= {<ItemListContainer greeting={'Solo por Hoy!!'}/>} />
          <Route path='/category/:categoryId' element= {<ContadorItem inicial={0} stock={10} onAdd={(cantidad) => console.log(cantidad)} />} />
          <Route path='/detail/:productId' element= {<ItemDetalles inicial={0} stock={10} onAdd={(cantidad) => console.log(cantidad)} />} />
          <Route path='*' element={<h1 className='text-center'> no hemos encontrado la pagina</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
