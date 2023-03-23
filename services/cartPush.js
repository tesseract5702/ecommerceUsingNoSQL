const cartModel = require("../schema/cart");

module.exports = async function(mail,reqProd)
{
    let result = await cartModel.updateOne({username:mail},{$push:{cartItem:reqProd}});
    return result;
}