const productModel = require("../schema/product");

module.exports = async function()
{
    let reqProd = await productModel.find();
    return reqProd;
}