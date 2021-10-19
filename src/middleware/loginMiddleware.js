const JWT = require("../helper/jwt");
const User = require("../model/userModel");

class logMiddleware {
  static async auth(req, res, next) {
    try {
      const autHeader = req.headers.authorization;
      if (autHeader.length > 0) {
        const token = autHeader.split(" ")[1];
        const hasil = await JWT.decode(token);
        req.user = hasil;
        next();
      } else {
        res.status(401).json({ message: "Token salah", status: 401 });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Token kosong", status: 500 });
    }
  }
  static async author(req, res, next) {
    try {
      const username = req.user;
      const db = await User.findOne({ name: username.name });
      if (db) {
        next();
      } else {
        res.status(401).json({ message: "Tidak memiliki akses", status: 401 });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error", status: 500 });
    }
  }
}

module.exports = logMiddleware;
