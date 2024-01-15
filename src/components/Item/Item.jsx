import { Link } from "react-router-dom"


export const Item = ({id, name, img ,category, price}) => {
    return(
        <article className="text-center m-5">
            <h3 className="text-secondary" > {name} </h3>
            <img src={img} style={{width: 100}} />
            <h5> Precio: ${price} </h5>
            <Link to={`/detail/${id}`} >Ver detalles</Link>
        </article>
    )
}