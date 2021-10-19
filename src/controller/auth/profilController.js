const User = require("../../model/userModel");
const path = require("path");

class profilControler {
  static async updProfile(req, res) {
    try {
      const { nama_lengkap, tempat, tanggal, alamat } = req.body;
      const username = req.user.username;
      const image = req.file;
      console.log(image);
      console.log(username);
      const db = await User.findOne({ username });
      if (db) {
        await User.updateOne({
          $set: { nama_lengkap, tempat, tanggal, alamat, image },
        });
        res.status(200).json({ message: sukses, status: 200 });
      } else {
        res.status(404).json({ message: "Not Found", status: 404 });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Eror", status: 500 });
    }
  }
  static async getProfile(req, res) {
    try {
      const username = req.user.username;
      const db = await User.findOne({ username });
      if (db) {
        res.status(200).json({ message: "Data User", status: 200, data: db });
      } else {
        res.send("error");
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error", status: 500 });
    }
  }
}

module.exports = profilControler;
