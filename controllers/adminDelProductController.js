const productModel = require("../schema/product");

async function adminDelProduct_controller(req,res)
{
    if(req.session.user.isAdmin)
	{
		let prodID = parseInt(req.params.prodID);
		let product = await productModel.deleteOne({id:prodID});
		res.redirect("/admin");
	}
	else
	{
		res.redirect("/")
	}
}

module.exports = adminDelProduct_controller;