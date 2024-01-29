import { useState, useContext, createContext } from "react"

const CartContext = createContext({
  cart: [],
  addItems: () => {},
  removeItems: () => {},
  elTotal: 0,
  total: 0,
  limpiarCarrito: () => {}

})


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItems = (productToAdd) => {
      if (!estaEnElCarrito(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
      }else{
        console.log('el producto ya esta agregado')
      }
    }
  
    const estaEnElCarrito = (id) => {
      return cart.some(prod => prod.id === id)
    }
  
    const removeItems = (id) => {
      const cartUpdate = cart.filter(prod => id === prod.id)
      setCart(cartUpdate)
    }

    const tomarElTotal = () => {
      let accu = 0
      cart.forEach(prod => {
        accu += prod.cantidad
      })
      return accu
    }
    console.log(tomarElTotal())
    
    const getTotal = () => {
      return tomarElTotal()
    }

    const elTotal = tomarElTotal()
    const total = getTotal()

    const limpiarCarrito = () => {
      setCart([])
    }
   
    
    



    return (
        <CartContext.Provider value={{cart, addItems, removeItems, elTotal, total, limpiarCarrito}}>
            { children }
        </CartContext.Provider>

    )
}


export const useCart = () => {
  return useContext(CartContext)
}