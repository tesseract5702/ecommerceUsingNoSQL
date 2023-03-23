const cartUpdateItem = require("../services/cartUpdateItem");
const newUserCart = require("../services/newUserCart");
const cartPush = require("../services/cartPush");
const cartUsingUser = require("../services/cartUsingUser");
const cartMailElementMatch = require("../services/cartMailElementMatch");
const getProdById = require("../services/getProdById");

async function addToCart_controller(req,res)
{
	if(req.session.user && req.session.user.isVerified)
	{

		let productId = parseInt(req.params.prodID);
		let reqProd;
		
		reqProd = await getProdById(productId);
		if(reqProd)
		{
			let userCart = await cartUsingUser(req.session.user.email);
			if(userCart.length)
			{
				let itemExist = await cartMailElementMatch(req.session.user.email,productId);
				if(itemExist.length)
				{
					let cartItemarr = userCart[0].cartItem;
					for(let i=0;i<cartItemarr.length;i++)
					{
						if(cartItemarr[i].id === productId)
						{
							cartItemarr[i].cartQuantity++;
							break;
						}
					}
					let result = await cartUpdateItem(req.session.user.email,cartItemarr);
					res.redirect("/openCart");
				}
				else
				{
					reqProd.cartQuantity=1; 
					let result = await cartPush(req.session.user.email,reqProd);
					res.redirect("/openCart");
				}
			}
			else
			{
				let arr = [];
				reqProd.cartQuantity = 1;
				arr.push(reqProd);
				newUserCart(req.session.user.email,arr);
				res.redirect("/openCart");
			}
		}
	}
	else
	{
		res.redirect("/login");
	}
}

module.exports = addToCart_controller;