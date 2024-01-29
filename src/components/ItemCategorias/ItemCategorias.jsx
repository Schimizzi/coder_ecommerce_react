import { useState, useEffect } from "react";
import { getProductsByCategory } from "../asyncMock";
import { useParams } from "react-router-dom";
import { ContadorItem } from "../Contador/ContadorItem";
import { useCart } from "../../context/CartContext";



export const ItemCategorias = () => {
    const [categorias, setCategorias] = useState([])
    const [cantidadActualizada, setCantidadActualizada] = useState(0)

    const { categoryId } = useParams();
    const { addItems } = useCart();
    const actCantidad = (nuevaCantidad) => {
        setCantidadActualizada(nuevaCantidad)
    }

    const handleOnAdd = () => {
        if (categorias) {
            const objProductToAdd = {
                id: categorias.id,
                stock: categorias.stock,
                price: categorias.price,
                name: categorias.name,
            };
            addItems(objProductToAdd);
        }
    };



    useEffect(() => {
        getProductsByCategory(categoryId)
            .then(result => {
                setCategorias(result)
            })
    }, [categoryId])

    return (
        <>
            {categorias ? (
                <div className="text-center">
                    {cantidadActualizada}
                    <h1> {categoryId} </h1>
                    <h2> {categorias?.name} </h2>
                    <img src={categorias.img} style={{ width: 300 }} />
                    <p> {categorias.description} </p>
                    <h3> ${categorias.price} </h3>
                    <ContadorItem cantidadActual={actCantidad} stock={10} onAdd={(cantidad) => console.log(`Añadir al carrito: ${cantidad}`)} />

                    {/* <ContadorItem cantidadActual={actCantidad} inicial={0} stock={categorias.stock} onAdd={handleOnAdd} /> */}
                </div>
            ) : (
                <p>Cargando detalles del producto...</p>
            )}
        </>
    )
}
