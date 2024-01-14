import { useState, useEffect } from "react";
import { getProductsByCategory } from "../asyncMock";
import { useParams } from "react-router-dom";
import { ContadorItem } from "../Contador/ContadorItem";

export const ItemCategorias = () => {
    const [categorias,  setCategorias] = useState([])

    const { categoryId } = useParams();

    useEffect(() => {
        getProductsByCategory(categoryId)
        .then(response => {
            setCategorias(response)
        })
    }, [categoryId])

    return (
        <div className="text-center">
            <h1> productos por categorias</h1>
            <h2> {categorias?.name} </h2>
            <img src={categorias?.img} style={{width: 300}} />
            <ContadorItem inicial={0} stock={10} onAdd={(cantidad) => console.log(cantidad)} />
        </div>
    )
}
