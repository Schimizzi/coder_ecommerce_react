import classes from './Carrito.module.css';
import florCarrito from './imgCarrito/cartverde.png'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom';


export const Carrito = () => {
    const { cantidadTotal } = useCart()
    return(
        <div>
            <Link to="/cart">
                <img className= {classes.carritocss} src={florCarrito} alt='florCarrito'/>
            </Link>
            {cantidadTotal} items
        </div>
    )
};