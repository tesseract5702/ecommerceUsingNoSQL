const cartModel = require("../schema/cart");

module.exports = async function(mail,prodID)
{
    let itemExist = await cartModel.find({username:mail , cartItem:{$elemMatch:{id:prodID}}});
    return itemExist;
}