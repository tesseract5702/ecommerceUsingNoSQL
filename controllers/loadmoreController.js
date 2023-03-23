const getProd = require("../services/getProd");
const { json } = require('express');

async function loadmore_controller(req,res)
{
    let page = parseInt(req.body.page);
	let products = 8;
	let arr = await getProd(page,products);
	res.json(JSON.stringify(arr));
}

module.exports = loadmore_controller;