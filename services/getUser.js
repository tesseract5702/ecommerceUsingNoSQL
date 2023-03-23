const userModel = require("../schema/user")

module.exports = async function(req)
{
    let user= await userModel.findOne({email:req.body.mail});
    return user;
}