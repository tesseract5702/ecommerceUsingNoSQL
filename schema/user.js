const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : String,
    email : String,
    password : String,
    isAdmin : Boolean,
    isVerified : Boolean,
    isVerifiedForget : Boolean,
    mailToken:Number
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;