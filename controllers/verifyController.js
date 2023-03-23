const { model } = require("mongoose");
const userModel = require("../schema/user");

async function verify_controller(req,res)
{
    let {token} = req.params;
	let user = await userModel.findOne({mailToken:parseInt(token)});
	req.session.user = user;
	req.session.isLoggedIn=true;
	console.log(req.session.user);
	if(user)
	{	
		let result = await userModel.updateOne({email:user.email},{$set:{isVerified:true}});
		let userAfterUpdate = await userModel.findOne({mailToken:parseInt(token)});
		req.session.user = userAfterUpdate;
		res.redirect("/");
	}
}

module.exports = verify_controller;