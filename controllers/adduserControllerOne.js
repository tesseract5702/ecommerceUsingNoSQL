const sendMail = require('../methods/sendMail');
const getUser = require("../services/getUser");
const putUser = require("../services/putUser");

async function adduser_controller(req,res)
{
    let { username, mail, password } = req.body;
	let data = await getUser(req);
	if(data)
	{
		res.render("signup",{err:"User Already Exist",errNF : ""});
	}
	else
	{
		putUser(req);
		try
		{

			let userData = await getUser(req);
			sendMail(mail,userData.mailToken,function(err,data)
				{
					if(err)
					{
						res.render("signup",{err:"",errNF:"Something went wrong"});
						return
					}
					req.session.isLoggedIn=true;
					req.session.user=userData;
					res.redirect("/")
			})
		}
		catch(err)
		{
			console.log(err,"141");
		}
	}
}

module.exports = adduser_controller;