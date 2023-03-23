const getProdLimit = require("../services/getProdLimit");

 async function home_controller(req,res){
    let products = await getProdLimit(8);
	res.render("home",{username:req.session.user.username,products:products,size:"4"});
}

module.exports = home_controller;