import { useState, useEffect } from "react";
import { getProductsById } from "../asyncMock";
import { useParams } from "react-router-dom";
import { ContadorItem } from "../Contador/ContadorItem";
import { useCart } from "../../context/CartContext";
import { Link } from 'react-router-dom'



/* export const ItemDetalles = ({name, price, stock}) => {
    const [productos, setProductos] = useState(0)

    const { productId } = useParams();
    const { addItems } = useCart()
    const handleOnAdd = (productos) => {
        const objProductToAdd = {
            stock, price, productos, name
        }
        addItems(objProductToAdd)
        setProductos(productos)
    }

    useEffect(() => {
        getProductsById(productId)
            .then(response => {
                setProductos(response)
            })
    }, [productId])

    return (
        <>
            <div className="text-center">
                <h1> detalles del </h1>
                <h2> {productos?.name} </h2>
                <img src={productos?.img} style={{ width: 300 }} />
                <p> {productos?.description} </p>
                <h3> ${productos?.price} </h3>
                <ContadorItem inicial={0} stock={30} onAdd={handleOnAdd} />
            </div>
            <footer>
                {
                    productos === 0 ? (
                        <ContadorItem onAdd={handleOnAdd} />
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>

        </>
    )
}
 */


// ... importaciones ...

export const ItemDetalles = () => {
    const [producto, setProducto] = useState(null); // Cambié el nombre a singular

    const { productId } = useParams();
    const { addItems } = useCart();

    const handleOnAdd = () => {
        if (producto) {
            const objProductToAdd = {
                stock: producto.stock,
                price: producto.price,
                name: producto.name,
            };
            addItems(objProductToAdd);
        }
    };

    useEffect(() => {
        getProductsById(productId)
            .then(response => {
                setProducto(response);
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
            });
    }, [productId]);

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
    );
};
