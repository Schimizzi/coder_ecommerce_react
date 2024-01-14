import { Link } from "react-router-dom"


export const Item = ({id, name, img ,category, price}) => {
    return(
        <article className="text-center">
            <h3> {name} </h3>
            <img src={img} style={{width: 100}} />
            <p> {category} </p>
            <h2> Precio: ${price} </h2>
            <Link to={`/detail/${id}`} >Ver detalles</Link>
        </article>
    )
}