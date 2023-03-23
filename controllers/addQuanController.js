const cartMailElementMatch = require("../services/cartMailElementMatch");
const cartUpdateItem = require("../services/cartUpdateItem");

async function addQuan_controller(req,res)
{
    let itemId = parseInt(req.params.itemId);
	let itemExist = await cartMailElementMatch(req.session.user.email,itemId);
	if(itemExist.length)
	{
		let cartItemarr = itemExist[0].cartItem;
		for(let i=0;i<cartItemarr.length;i++)
		{
			if(cartItemarr[i].id === itemId)
			{
				if(cartItemarr[i].cartQuantity<cartItemarr[i].quantity)
				{
					cartItemarr[i].cartQuantity++;
				}
				break;
			}
		}
		let result = await cartUpdateItem(req.session.user.email,cartItemarr);
		res.redirect("/openCart");
    }
}

module.exports = addQuan_controller;