const getProdLimit = require("../services/getProdLimit");
const getProdSort = require("../services/getProdSort");
const addProd = require("../services/addProd");
const multer  = require('multer')
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'uploads/')
	},
	filename: function (req, file, cb) {
	  cb(null, Date.now() + path.extname(file.originalname))
	}
})
const path  = require('path')
const upload = multer({storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
        } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
      },
    limits: { fileSize: 250000}
})

async function addProd_controller(req,res)
{
    if(req.session.user.isAdmin)
	{
		upload.single("prodImage")(req,res,async(err)=>{
			if(err)
			{
				let products = await getProdLimit(8);
				res.render("admin",{username:req.session.user.username,products:products,size:"4",err:err});
				return
			}
			let productArr = await getProdSort(1);
			let id = productArr[0].id;
			id++;
			addProd(id,req);
			res.redirect("/admin")
		})
	}
	else{
		res.redirect("/");
	}
}

module.exports = addProd_controller;
