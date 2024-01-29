import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ContadorItem } from "../Contador/ContadorItem"
import { useCart } from "../../context/CartContext"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../servicios/firebase/firebaseConfig"

export const ItemDetalles = () => {
  const [producto, setProducto] = useState(null)
  const { productId } = useParams()
  const { addItems } = useCart()

  const handleOnAdd = () => {
    if (producto) {
      const objProductToAdd = {
        cantidad: producto.stock,
        id: producto.id,
        stock: producto.stock,
        price: producto.price,
        name: producto.name,
      };
      addItems(objProductToAdd)
    }
  }

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const productoRef = doc(db, "products", productId)
        const productoSnapshot = await getDoc(productoRef)

        if (productoSnapshot.exists()) {
          setProducto(productoSnapshot.data())
        } else {
          console.error("Producto no encontrado")
        }
      } catch (error) {
        console.error("Error fetching product details:", error)
      }
    }

    obtenerProducto()
  }, [productId])

  return (
    <>
      {producto ? (
        <div className="text-center">
          <h1>Detalles del producto</h1>
          <h2>{producto.name}</h2>
          <img src={producto.img} style={{ width: 300 }} alt={producto.name} />
          <p>{producto.description}</p>
          <h3>${producto.price}</h3>
          <ContadorItem inicial={0} stock={producto.stock} onAdd={handleOnAdd} />
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </>
  )
}
