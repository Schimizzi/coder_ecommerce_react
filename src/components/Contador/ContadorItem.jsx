import { useState } from 'react';

export const ContadorItem = ({ stock, inicial, onAdd }) => {
    const [cantidad, setCantidad] = useState(inicial)
    const increment = () => {
        if(cantidad < stock){
            setCantidad(cantidad +1)
        }
    }

    const decrement = () => {
        if(cantidad > 0){
            setCantidad(cantidad -1)
        }
    }


    return(
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <button className='btn btn-primary' onClick={decrement}> - </button>
                </div>
                <div className="col">
                    <h4>{cantidad}</h4>
                </div>
                <div className="col">
                    <button className='btn btn-primary' onClick={increment}> + </button>
                </div>
            </div>
            <div>
                <button className='btn btn-primary' onClick={() => onAdd(cantidad)} disabled = {!stock} >Agregar al carrito</button>
            </div>
        </div>
    )
}