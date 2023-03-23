const cartModel = require("../schema/cart");

module.exports = async function(mail,arr)
{
    let newUserCart = new cartModel();
    newUserCart.username = mail;
    newUserCart.cartItem=arr;
    let saveCart = await newUserCart.save();
}