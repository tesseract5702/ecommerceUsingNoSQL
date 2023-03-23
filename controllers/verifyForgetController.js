const userModel = require("../schema/user");

async function verify_forget_controller(req,res)
{
    let {token} = req.params;
	let user = await userModel.findOne({mailToken:parseInt(token)});
	req.session.user = user;
	req.session.isLoggedIn=true;
	req.session.user.isVerifiedForget=true;
	if(user)
	{	
		res.redirect("/resetPass");
	}
}

module.exports = verify_forget_controller;