const getProdLimit = require("../services/getProdLimit");

async function root_controller(req,res){
    let products = await getProdLimit(8);
	res.render("root",{products:products,size:"4"});
}

module.exports = root_controller;