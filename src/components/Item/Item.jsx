export const Item = ({id, name, img ,category, price}) => {
    return(
        <article className="text-center">
            <h3> {name} </h3>
            <img src={img} style={{width: 100}} />
            <p> {category} </p>
            <h2> Precio: ${price} </h2>
            <button>Ver detalles</button>
        </article>
    )
}