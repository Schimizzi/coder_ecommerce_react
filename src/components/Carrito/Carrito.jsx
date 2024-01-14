import classes from './Carrito.module.css';
import florCarrito from './imgCarrito/cartverde.png'


export const Carrito = () => {
    return(
        <div>
            <img className= {classes.carritocss} src={florCarrito} alt='florCarrito'/>
            10 items
        </div>
    )
};