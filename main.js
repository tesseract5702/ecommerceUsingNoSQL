const express = require('express');
const session = require("express-session");
const utf8 = require("utf8");
const initDb = require("./database/init");
const app = express()
const port = 3000

app.use(express.static("uploads"));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine', 'ejs');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

initDb();

//Importing routes
const homeRouter = require("./routes/home");
const rootRouter = require("./routes/root");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const adduserRouter = require("./routes/adduser");
const verifyRouter = require("./routes/verify");
const verifyForgetRouter = require("./routes/verifyForget");
const resetPassRouter = require("./routes/resetPass");
const forgetPassRouter = require("./routes/forgetPass");
const forgetSubmitRouter = require("./routes/forgetSubmit");
const adminRouter = require("./routes/admin");
const allRouter = require("./routes/all");

//Routing
app.use("/", homeRouter);
app.use("/root",rootRouter);
app.use("/login",loginRouter);
app.use("/logout",logoutRouter); 
app.use("/addUser",adduserRouter);
app.use("/verify",verifyRouter);
app.use("/verifyToken/:token",verifyForgetRouter);
app.use("/resetPass",resetPassRouter);
app.use("/forgetPass",forgetPassRouter);
app.use("/forgetSubmit",forgetSubmitRouter);
app.use("/admin",adminRouter);
app.use("*",allRouter);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})