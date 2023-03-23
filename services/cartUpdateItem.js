const cartModel = require("../schema/cart");

module.exports = async function(mail,cartItemarr)
{
    let result = await cartModel.updateOne({username:mail},{$set:{cartItem:cartItemarr}});
    return result;
}