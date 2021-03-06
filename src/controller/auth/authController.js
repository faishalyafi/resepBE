const Bcrypt = require("../../helper/bcrypt");
const JWT = require("../../helper/jwt");
const User = require("../../model/userModel");
const crypto = require("crypto");
const { sendEmail } = require("../../helper/nodemailer");

class authController {
  static async register(req, res) {
    try {
      const { username, email } = req.body;
      const cek = await User.find({ $or: [{ username }, { email }] });

      if (cek.length) {
        res.status(409).json({ message: "conflict name/email", status: 409 });
      } else {
        const password = await Bcrypt.enskrip(req.body.password);
        const token = crypto.randomBytes(16).toString("hex");
        const data = await User.create({ username, email, password, token });
        sendEmail(email, username, token);
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
        if (hasil) {
          req.body.role = db.role;
          await User.findOneAndUpdate({ username }, { $set: { token: null } });
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
      res.status(200).json({ message: pesan, status: stat });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error CekEmail" });
    }
  }
  static async verifikasi(req, res) {
    try {
      const token = req.query.token;
      const data = await User.findOneAndUpdate(
        { token },
        { $set: { verifikasi: true } }
      );
      let stat = 0;
      let pesan = "";
      if (data) {
        pesan = "Berhasil aktivasi";
        stat = 200;
      } else {
        pesan = "Token activasi tidak ditemukan";
        stat = 404;
      }
      res.status(200).json({ message: pesan, status: stat });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error verifikasi", status: 500 });
    }
  }
}
module.exports = authController;
