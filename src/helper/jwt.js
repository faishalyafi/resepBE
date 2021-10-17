const jwt = require("jsonwebtoken");

class JWT {
  static token(data) {
    return new Promise((resolve, reject) => {
      jwt.sign(data, process.env.TOKEN, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }
  static decode(data) {
    return new Promise((resolve, reject) => {
      jwt.verify(data, process.env.TOKEN, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }
}

module.exports = JWT;
