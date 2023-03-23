const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/test"

module.exports = async function init()
{
	await mongoose.connect(url);
	console.log("connected to db")
}
