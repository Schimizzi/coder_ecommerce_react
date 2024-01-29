import { useState, useEffect } from 'react';

export const ContadorItem = ({ stock, inicial = 8, onAdd }) => {
    const [cantidad, setCantidad] = useState(inicial);

    useEffect(() => {
        console.log(cantidad)
    }, [cantidad]);

    const increment = () => {        
        if(cantidad < stock){
            setCantidad(prev => prev + 1);
        }
    }

    const decrement = () => {
        if(cantidad > 0){
            setCantidad(cantidad - 1);
        }
    }

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <button className='btn btn-primary' onClick={decrement}> - </button>
                    <button className='btn btn-primary' onClick={() => onAdd(cantidad)} disabled={cantidad === 0}>Agregar {cantidad} al carrito</button>
                    <button className='btn btn-primary' onClick={increment}> + </button>
                </div>
            </div>
        </div>
    );
}
