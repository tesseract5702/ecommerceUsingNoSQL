const userModel = require("../schema/user");
const utf8 = require("utf8");

module.exports = async function(req)
{
    let data = new userModel();
    data.username = req.body.username;
    data.email = req.body.mail;
    data.password = utf8.encode(req.body.password);
    //console.log(utf8.encode(toString(req.body.password)),"10putUser");
    data.isAdmin = false;
    data.isVerified = false;
    data.isVerifiedForget = false;
    data.mailToken = Math.floor(Math.random()*1000000);
    let saveUser = data.save();
}