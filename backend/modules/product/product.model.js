const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
        name: {
            type: String
        },
        description: {
            type: String
        },
        price: {
            type: String
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Category'
        },
        isFeatured: {
            type: String
        },
        isPopular: {
            type: String
        }
    },   
    {
        collection : 'products'
    });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;