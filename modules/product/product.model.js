const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    productName: {
        type: String
    },
    productColor: {
        type: String
    },
    productSize: {
        type: String
    }
    },   
    {
        collection : 'products'
    });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;