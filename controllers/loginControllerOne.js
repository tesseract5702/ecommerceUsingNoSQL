const getUser = require("../services/getUser");

async function login_controller(req,res)
{
    let user = await getUser(req);
	if(user.isAdmin)
	{
		if(utf8.decode(user.password) === req.body.password)
		{
			req.session.isLoggedIn = true;
			req.session.user = user;
			res.redirect("/admin");
			return;
		}
		else
		{
			res.render("login",{errorlogin:"Username and Password doesn't match"});
			return;
		}
	}
	if(user) 
	{
		if(user.password === req.body.password)
		{
			if(user.isVerified)
			{
				req.session.isLoggedIn=true;
				req.session.user = user;
				res.redirect("/");
			}
			else{
				res.render("notVerified");
			}
		}
		else if(user.password !== req.body.password)
		{
			req.session.isLoggedIn = false;
			res.render("login",{errorlogin:"Username and Password doesn't match"});
		}
		
	}
	else
	{
		res.render("login",{errorlogin:"User not found!"});
	}
}

module.exports = login_controller;