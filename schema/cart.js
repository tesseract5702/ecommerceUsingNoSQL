const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    username : String,
    cartItem : Array
 
});

const cartModel = mongoose.model('cart', cartSchema);

module.exports = cartModel;
