const Bcrypt = require("../../helper/bcrypt");
const JWT = require("../../helper/jwt");
const User = require("../../model/userModel");

class authController {
  static async register(req, res) {
    try {
      const { username, email } = req.body;
      const cek = await User.find({ $or: [{ username }, { email }] });

      if (cek.length) {
        res.status(409).json({ message: "conflict name/email", status: 409 });
      } else {
        const password = await Bcrypt.enskrip(req.body.password);
        const data = await User.create({ username, email, password });
        res
          .status(200)
          .json({ message: "Berhasil register", status: 200, data });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: " register error", status: 500 });
    }
  }
  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const db = await User.findOne({ username });
      if (db) {
        const hash = db.password;
        const hasil = await Bcrypt.deskrip({ password, hash });
        req.body.role = db.role;
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
      res.status(500).json({ message: "Error Login", status: 500 });
    }
  }
  static async cekUsername(req, res) {
    try {
      const { username } = req.body;
      const data = await User.findOne({ username });
      var stat = 0;
      var pesan = "";
      if (data) {
        pesan = "Data ada";
        stat = 200;
      } else {
        pesan = "Data tidak ditemukan";
        stat = 404;
      }
      res.status(200).json({ message: pesan, status: stat });
    } catch (err) {
      console.log(err);
      res.json(500).json({ message: "Error CekUsername" });
    }
  }
  static async cekEmail(req, res) {
    try {
      const { email } = req.body;
      const data = await User.findOne({ email });
      var stat = 0;
      var pesan = "";
      if (data) {
        stat = 200;
        pesan = "Data ada";
      } else {
        stat = 404;
        pesan = "Data tidak ditemukan";
      }
      res.status(stat).json({ message: pesan, status: stat });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error CekEmail" });
    }
  }
}
module.exports = authController;
