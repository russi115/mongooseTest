require('../connection')

const Product = require('../models/Products')

async function main(){
    const product = await Product.find()
    console.log(product)
} 

main()