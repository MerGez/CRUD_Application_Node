const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    quantity : {
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

const Itemsdb = mongoose.model('item', schema);

module.exports = Itemsdb;