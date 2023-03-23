const productModel = require("../schema/product");

async function updateProduct_controller(req,res)
{
    if(req.session.user.isAdmin)
	{
		let prodDet = req.body;
		let result = await productModel.updateOne({_id:prodDet.productID},{$set:{name:prodDet.productName,price:prodDet.productPrice,details:prodDet.productDescription,quantity:prodDet.productQuantity}})
		res.json(result);
	}
	else
	{
		res.redirect("/")
	}
}

module.exports=updateProduct_controller;