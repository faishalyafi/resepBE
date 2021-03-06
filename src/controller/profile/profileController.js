const User = require("../../model/userModel");
const sharp = require("sharp");

class profilControler {
  static async updProfile(req, res, next) {
    try {
      const { nama_lengkap, tempat, tanggal, alamat } = req.body;
      const username = req.user.username;
      const db = await User.findOne({ username });
      if (db) {
        if (req.file) {
          const image = Date.now() + "-" + req.file.originalname;
          await User.updateOne({ username }, { $set: { image } });
          await sharp(req.file.buffer)
            .resize(600)
            .toFile(`public/images/${image}`);
        }
        await User.updateOne(
          { username },
          {
            $set: { nama_lengkap, tempat, tanggal, alamat },
          }
        );
        res.status(200).json({ message: "sukses terupdate", status: 200 });
      } else {
        res.status(202).json({ message: "Not Found", status: 202 });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error update", status: 500 });
    }
  }
  static async getProfile(req, res) {
    try {
      const username = req.user.username;
      const db = await User.findOne({ username });
      if (db) {
        res.status(200).json({ message: "Data User", status: 200, data: db });
      } else {
        res.status(404).json({ message: "Not Found", status: 404 });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error getprofile", status: 500 });
    }
  }
}

module.exports = profilControler;
