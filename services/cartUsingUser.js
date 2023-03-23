const cartModel = require("../schema/cart");

module.exports = async function(mail)
{
    let userCart = await cartModel.find({username:mail})
    return userCart;
}