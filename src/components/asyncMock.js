const products = [
    { 
        id: '1', 
        name: 'iphone 12', 
        price: 1000, 
        category: 'celular', 
        img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png', 
        stock: 25, 
        description:'Descripcion de Iphone 12'
    }
];
    
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}