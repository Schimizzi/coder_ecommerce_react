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
    }, [productId])

    return (
        <div className="text-center">
            <h1> detalles del </h1>
            <h2> {productos?.name} </h2>
            <img src={productos?.img} style={{width: 300}} />
            <p> {productos?.description} </p>
            <h3> ${productos?.price} </h3>
            <ContadorItem inicial={0} stock={10} onAdd={(cantidad) => console.log(cantidad)} />
        </div>
    )
}
