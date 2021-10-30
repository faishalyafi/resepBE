const fs = require('fs')
const sharp=require('sharp')

const compress = async (req, res, next) => {
    fs.access('./public/images', (err)=>{
      if(err){
        fs.mkdirSync('./public/images')
      }
    });
    await sharp(req.file.buffer)
    .resize({width:300, height:300})
    .toFile('./public/images/'+req.file.originalname);
    next()
   }
   module.exports=compress;