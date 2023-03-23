const express = require("express");
const router = express.Router();
const verify_forget_controller = require("../controllers/verifyForgetController");

router.get("/",verify_forget_controller);

module.exports=router;