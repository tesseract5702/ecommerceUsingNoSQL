const productModel = require("../schema/product");

module.exports = async function(products)
{
    let arr = await productModel.find().sort({id:-1}).limit(products);
    return arr;
}