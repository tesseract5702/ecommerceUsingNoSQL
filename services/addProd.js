const productModel = require("../schema/product");

module.exports = async function(id,req)
{
    let product = await productModel();
    product.id = id;
    product.name = req.body.productname;
    product.image = req.file.filename;
    product.price = req.body.prodPrice;
    product.details = req.body.prodDetails;
    product.quantity = req.body.prodQuantity;
    let saveProduct = await product.save();
}
