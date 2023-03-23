const productModel = require("../schema/product");

module.exports = async function(page,products)
{
    let arr = await productModel.find().skip(page*products).limit(products);
    return arr;
}