const cartUsingUser = require("../services/cartUsingUser");

async function checkout_controller(req,res)
{
    let userCart = await cartUsingUser(req.session.user.email);
	let totalAmt = 0;
	if(userCart.length)
	{
		userCart[0].cartItem.forEach((item)=>{
			if(item.order)
			{
				totalAmt+=item.price*item.cartQuantity;
			}
		})
		res.render("checkout",{username:req.session.user.username,cartItems:userCart[0].cartItem,total:totalAmt})
	}
}

module.exports = checkout_controller;