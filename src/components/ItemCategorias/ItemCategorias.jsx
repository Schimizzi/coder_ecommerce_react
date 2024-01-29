import { useState, useEffect } from "react";
import { getProductsByCategory } from "../asyncMock";
import { useParams } from "react-router-dom";
import { ContadorItem } from "../Contador/ContadorItem";
import { useCart } from "../../context/CartContext";



export const ItemCategorias = ({ stock }) => {
    const [categorias, setCategorias] = useState([])

    const { categoryId } = useParams();
    const { addItems } = useCart();

    const handleOnAdd = () => {
        if (categorias) {
            const objProductToAdd = {
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
                    <h1> {categoryId} </h1>
                    <h2> {categorias?.name} </h2>
                    <img src={categorias.img} style={{ width: 300 }} />
                    <p> {categorias.description} </p>
                    <h3> ${categorias.price} </h3>
                    <ContadorItem inicial={0} stock={categorias.stock} onAdd={handleOnAdd} />
                </div>
            ) : (
                <p>Cargando detalles del producto...</p>
            )}
        </>
    )
}
