const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : String,
    role : String,
    commande : String
})

const Userdb = mongoose.model('user', schema);

module.exports = Userdb;