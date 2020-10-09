require('../connection')

const Product = require('../models/Products')

const someFunction = async () => {
    // const result = await Product.deleteMany({name: 'keyboard'})
    const result = await Product.deleteOne({name: 'laptop'})
    
    console.log(result)
}
someFunction()