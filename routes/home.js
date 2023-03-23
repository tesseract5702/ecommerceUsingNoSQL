const express = require("express");
const router = express.Router();
const home_controller = require("../controllers/homeController");
const loadmore_controller = require("../controllers/loadmoreController");
const checkAuth = require("../middlewares/checkAuth");
const addToCart_controller = require("../controllers/addToCartController");
const openCart_controller=require("../controllers/openCartController");
const deleteQuan_controller = require("../controllers/deleteitemController");
const changePass_controller = require("../controllers/changePassController");
const checkout_controller = require("../controllers/checkoutController");
const checkoutCheck_controller = require("../controllers/checkoutCheckController");
const decQuan_controller = require("../controllers/decQuanController");
const addQuan_controller = require("../controllers/addQuanController");

router.get("/",checkAuth,home_controller);
router.post("/loadmore",checkAuth,loadmore_controller);
router.get("/addTocart/:prodID",addToCart_controller);
router.get("/openCart",checkAuth,openCart_controller);
router.get("/deleteItem/:itemId",checkAuth,deleteQuan_controller);
router.post("/changePass",checkAuth,changePass_controller);
router.get("/checkout",checkAuth,checkout_controller);
router.post("/checkoutCheck",checkAuth,checkoutCheck_controller);
router.get("/decQuantity/:itemId",checkAuth,decQuan_controller);
router.get("/addQuantity/:itemId",checkAuth,addQuan_controller);

module.exports = router;