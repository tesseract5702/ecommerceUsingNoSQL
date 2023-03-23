function addProductPage_controller(req,res)
{
    if(req.session.user.isAdmin)
	{	
		res.render("addProduct",{username:req.session.user.username});
	}
	else
	{
		res.redirect("/")
	}
}

module.exports=addProductPage_controller;