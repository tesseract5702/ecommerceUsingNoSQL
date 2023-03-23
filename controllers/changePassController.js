const userModel = require("../schema/user");

async function changePass_controller(req,res)
{
    let {newPass, newPass1} = req.body;
	if(newPass === newPass1)
	{
		if(newPass !== req.session.user.password)
		{
			let result = await userModel.updateOne({email:req.session.user.email},{$set:{password:newPass}});
			res.redirect("/")
		}
		else
		{
			res.render("reset",{errorlogin:"Enter different Password"});
		}	
	}
	else{
		res.render("reset",{errorlogin:"Password Doesn't Match:"});
	}
}

module.exports = changePass_controller;