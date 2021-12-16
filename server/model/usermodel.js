const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  //cart: [cartSchema]
  //commande: [commandeSchema]
});

const Userdb = mongoose.model("user", schema);

module.exports = Userdb;