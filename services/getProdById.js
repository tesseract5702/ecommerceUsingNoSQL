const productModel = require("../schema/product");

module.exports = async function(prodID)
{
    let reqProd = await productModel.findOne({id:prodID});
    return reqProd;
}