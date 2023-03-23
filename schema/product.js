const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id:Number,
    name:String,
    image:String,
    price:Number,
    details:String,
    quantity:Number,
    cartQuantity:Number
});

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;