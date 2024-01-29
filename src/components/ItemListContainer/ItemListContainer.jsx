import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        getProducts(categoryId)
        .then(productos => {
            setProductos(productos)
       /*  .catch(error => {
            console.error(error)
        }) */

        })
        
    }, [categoryId])
    return (
        <>
            <h2 className='text-center'> {greeting} </h2>
            <ItemList productos={productos}/>
        </>
    )
}