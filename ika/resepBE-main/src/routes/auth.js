const express = require("express");
const app=express
const authController = require("../controller/auth/authController");
const router = express.Router();
const multer=require('multer')

//multer foto 
const storagefile=multer.diskStorage(
    {
    destination:(req,file,cb)=>{
        cb(null, "./src/public/image");
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    }
}
)
const upload = multer({ storage:storagefile })
const hasilupdate=upload.single('image')


router.post("/register", authController.register);

router.post("/login", authController.login);

router.post('/update', hasilupdate, function (req, res, next) {next()},authController.update)

module.exports = router;
