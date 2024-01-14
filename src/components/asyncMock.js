const products = [
    { 
        id: '1', 
        name: 'iphone 11', 
        price: 11000, 
        category: 'producto1', 
        img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png', 
        stock: 25, 
        description:'Descripcion de Iphone 11'
    },
    { 
        id: '2', 
        name: 'iphone 12', 
        price: 12000, 
        category: 'producto2', 
        img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png', 
        stock: 25, 
        description:'Descripcion de Iphone 12'
    },
    { 
        id: '3', 
        name: 'iphone 13', 
        price: 13000, 
        category: 'producto3', 
        img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png', 
        stock: 25, 
        description:'Descripcion de Iphone 13'
    },
    { 
        id: '4', 
        name: 'iphone 14', 
        price: 14000, 
        category: 'producto4', 
        img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png', 
        stock: 25, 
        description:'Descripcion de Iphone 14'
    },

];


    
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}

export const getProductsByCategory = (categoriasId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(produ => produ.category === categoriasId))
        }, 1000)
    })
}