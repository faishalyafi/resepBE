const Bcrypt = require("../../helper/bcrypt");
const JWT = require("../../helper/jwt");
const User = require("../../model/userModel");

class authController {
  static async register(req, res) {
    try {
      const { username, email } = req.body;
      const cekUsername = await User.findOne({ username });
      const cekEmail = await User.findOne({ email });

      if (cekEmail || cekUsername) {
        res.status(409).json({ message: "conflict name/email", status: 409 });
      } else {
        const password = await Bcrypt.enskrip(req.body.password);
        await User.create({ username, email, password });
        res.status(200).json({ message: "Berhasil register", status: 200 });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "error", status: 500 });
    }
  }
  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const db = await User.findOne({ username });
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
}
module.exports = authController;
