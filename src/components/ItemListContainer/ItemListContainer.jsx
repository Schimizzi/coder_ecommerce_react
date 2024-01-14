import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts()
        .then(productos => {
            setProductos(productos)
        .catch(error => {
            console.error(error)
        })

        })
        
    })
    return (
        <>
            <h2 className='text-center'> {greeting} </h2>
            <ItemList productos={productos}/>
        </>
    )
}