const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    userId : {
        type : String,
        required: true
    },
    products : {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 1
    }
})

const Cartsdb = mongoose.model('cart', schema);

module.exports = Cartsdb;