require('./connection')

const Product = require('./models/Products')

const product = new Product({
    name: 'laptop',
    description: 'lenovo',
    price: 1390
})

product.save((err, document) => {
    if(err) console.log(err);
    console.log(document)
})

console.log(product)