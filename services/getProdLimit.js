const productModel = require("../schema/product");

module.exports = async function(products)
{
    let arr = await productModel.find().limit(products);
    return arr;
}