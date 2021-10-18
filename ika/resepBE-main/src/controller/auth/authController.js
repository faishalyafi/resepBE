const Bcrypt = require("../../helper/bcrypt");
const JWT = require("../../helper/jwt");
const User = require("../../model/userModel");

class authController {
  static async register(req, res) {
    try {
      const { name, email, image } = req.body;
      const cekName = await User.findOne({ name });
      const cekEmail = await User.findOne({ email });

      if (cekEmail || cekName) {
        res.status(409).json({ message: "conflict name/email", status: 409 });
      } else {
        const password = await Bcrypt.enskrip(req.body.password);
        var user = "";
        if (image) {
          user = new User({ name, email, password, image });
        } else {
          user = new User({ name, email, password });
        }
        const save = await user.save();
        res.send(save);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "error", status: 500 });
    }
  }
  static async login(req, res) {
    try {
      const { name, password } = req.body;
      const db = await User.findOne({ name });
      if (db) {
        const hash = db.password;
        const hasil = await Bcrypt.deskrip({ password, hash });
        if (hasil) {
          const token = await JWT.token(req.body);
          res.status(200).json({
            message: "Berhasil login",
            status: 200,
            token,
          });
        } else {
          res.status(401).json({ message: "Password salah", status: 401 });
        }
      } else {
        res.status(400).json({ message: "Data Not found", status: 404 });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "error", status: 500 });
    }
  }
  static async update(req, res){
      try {
          const { ttl, alamat, username } = req.body;
          await User.updateMany({$set: {"image": req.file.originalname, ttl, alamat, username}
        })
          let datanya=await User.find()
          res.status(200).json({ message: "success update", status: 200 ,data:datanya});
      } catch (error) {
          res.json({pesan:error})
      }
  
  }
}
module.exports = authController;
