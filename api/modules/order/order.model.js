const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    statu: {
        type: String
    }
})