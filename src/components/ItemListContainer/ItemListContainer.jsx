import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../servicios/firebase/firebaseConfig"
import { getDocs, collection } from "firebase/firestore" 


export const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const coleccion = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(coleccion)
            .then(querySnapshot => {
                const productFire = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields}
                })

                setProductos(productFire)
            })
            .catch(error => {
                console.log('Hubo un error')
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId]);

   
    return (
        <>
            <h2 className='text-center'> {greeting} </h2>
            {loading ? <h3>Cargando algo...</h3> : <ItemList productos={productos} />}
        </>
    );
}

