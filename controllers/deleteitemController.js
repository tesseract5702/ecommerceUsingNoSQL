const cartMailElementMatch = require("../services/cartMailElementMatch");
const cartUpdateItem = require("../services/cartUpdateItem");

async function deleteQuan_controller(req,res)
{
    let itemId = parseInt(req.params.itemId);
	let itemExist = await cartMailElementMatch(req.session.user.email,itemId);
	if(itemExist.length)
	{
		let cartItemarr = itemExist[0].cartItem;
		let newCartItem = cartItemarr.filter(data=>data.id !== itemId);
		let result = await cartUpdateItem(req.session.user.email,newCartItem);
		res.redirect("/openCart");
	}
}

module.exports = deleteQuan_controller;