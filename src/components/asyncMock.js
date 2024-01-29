const products = [
    { 
        id: '1', 
        name: 'Legion 9', 
        price: 11000, 
        category: 'computadora', 
        img:'../public/img/computadora.png', 
        stock: 15, 
        description:'Te presentamos la Lenovo Legion 9, un titán sin igual fabricada con carbono forjado a mano. Su sistema de refrigeración líquida Legion Coldfront y el chip de inteligencia artificial de última generación redefinen el gaming. Disfruta de la mejor relación potencia-peso en una laptop para gaming, una pantalla mini-LED PureSight y colores certificados por X-Rite y Pantone para obtener imágenes realistas. Para conocer nuestra visión de la laptop para gaming definitiva, no busques más.'
    },
    { 
        id: '2', 
        name: 'Iphone 12', 
        price: 12000, 
        category: 'celular', 
        img:'../public/img/celular.jpeg', 
        stock: 5, 
        description:`Super Retina XDR display 6.1‑inch (diagonal) all‑screen OLED display 2532‑by‑1170-pixel resolution at 460 ppi
        True Tone display
        A14 Bionic chip Next‑generation Neural Engine
        Dual 12MP Ultra Wide and Wide cameras
        4K video recording at 24 fps, 30 fps, or 60 fps
        1080p HD video recording at 30 fps or 60 fps
        720p HD video recording at 30 fps
        Face ID
        
        Cellular and Wireless
        5G (sub‑6 GHz)
        Gigabit LTE with 4x4 MIMO and LAA
        Wi‑Fi 6 (802.11ax) with 2x2 MIMO
        Bluetooth 5.0 wireless technology
        Ultra Wideband chip for spatial awareness
        NFC with reader mode
        Express Cards with power reserve`
    },
    { 
        id: '3', 
        name: 'Galaxy S13', 
        price: 13000, 
        category: 'tablet', 
        img:'../public/img/tablet.png', 
        stock: 25, 
        description:'Tablet 10.1 Inch Android 9.0 3G Phone Tablets with 2GB RAM+32GB ROM Dual Sim Card 2MP+ 5MP Camera, WiFi, Bluetooth, GPS, Quad Core, HD Touchscreen, Support 3G Phone Call (Black)'
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
