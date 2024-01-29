import { useState, useEffect } from "react";
import { getProductsByCategory } from "../asyncMock";
import { useParams } from "react-router-dom";
import { ContadorItem } from "../Contador/ContadorItem";
import { Link } from 'react-router-dom'



export const ItemCategorias = ({stock}) => {
    const [categorias, setCategorias] = useState([])

    const { categoryId } = useParams();

    useEffect(() => {
        getProductsByCategory(categoryId)
            .then(result => {
                setCategorias(result)
            })
    }, [categoryId])

    return (
        <>
            <div className="text-center">
                <h1> {categoryId} </h1>
                <h2> {categorias?.name} </h2>
                <img src={categorias?.img} style={{ width: 300 }} />
                <p> {categorias?.description} </p>
                <h3> ${categorias?.price} </h3>
                <ContadorItem inicial={0} stock={10} onAdd={(cantidad) => console.log(cantidad)} />
            </div>
           <footer>
                {
                    categorias === 0 ? (
                        <ContadorItem onAdd={handleOnAdd} stock={stock} />
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </>
    )
}
