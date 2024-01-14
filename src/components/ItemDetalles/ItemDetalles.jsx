import { useState, useEffect } from "react";
import { getProductsById } from "../asyncMock";
import { useParams } from "react-router-dom";
import { ContadorItem } from "../Contador/ContadorItem";

export const ItemDetalles = () => {
    const [productos,  setProductos] = useState([])

    const { productId } = useParams();

    useEffect(() => {
        getProductsById(productId)
        .then(response => {
            setProductos(response)
        })
    }, [])

    return (
        <div className="text-center">
            <h1> detalles del producto</h1>
            <h2> {productos?.name} </h2>
            <img src={productos?.img} style={{width: 100}} />
            <ContadorItem inicial={0} stock={10} onAdd={(cantidad) => console.log(cantidad)} />
        </div>
    )
}
