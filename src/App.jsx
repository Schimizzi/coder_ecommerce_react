import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ContadorItem } from './components/Contador/ContadorItem';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Compren!!'}/>
      <ContadorItem inicial={0} stock={10} onAdd={(cantidad) => console.log(cantidad)} />
    </>
  )
}

export default App
