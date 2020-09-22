require('../connection')

const Product = require('../models/Products')

const createProduct = async() =>{

    const laptopone = new Product({
        name: 'laptop',
        description: 'htp pavition'
    })
    await laptopone.save();
} 

createProduct()