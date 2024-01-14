import { Item } from "../Item/Item"

export const ItemList = ({productos}) => {
    return(
        <div>{
            productos.map(prod => {
                return <Item key={prod.id} {...prod} />
                })
            }
            
        </div>
    )
}