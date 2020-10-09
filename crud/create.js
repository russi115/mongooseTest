require('../connection')

const Product = require('../models/Products')

const createProduct = async() =>{

    const laptopone = new Product({
        name: 'laptop with .env',
        description: 'htp pavition'
    })
    await laptopone.save();
} 

createProduct()