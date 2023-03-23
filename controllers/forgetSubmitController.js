const getUser = require("../services/getUser");
const forgetMail = require("../methods/forgetPass");

async function forgetSubmit_controller(req,res)
{
    let user = await getUser(req);
	if(user)
	{
		req.session.user = user;
		forgetMail(req.body.email,req.session.user.mailToken,(err,data)=>{
			res.redirect("/resetPass");
		})
	}
	else{
		res.render("forget",{err:"Enter correct email id"})
	}
}

module.exports = forgetSubmit_controller;