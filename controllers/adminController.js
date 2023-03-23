const getProdLimit = require("../services/getProdLimit");

async function admin_controller(req,res)
{
    if(req.session.user)
	{
		if(req.session.user.isAdmin)
		{
			let products = await  getProdLimit(8);
			res.render("admin",{username:req.session.user.username,products:products,size:"4",err:""});		
		}
		else{
			res.redirect("/");
		}
	}
	else
	{
		res.redirect("/login");
	}
}

module.exports = admin_controller;