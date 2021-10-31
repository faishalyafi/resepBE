const bcrypt = require("bcrypt");
class Bcrypt {
  static enskrip(data) {
    return new Promise((resolve, reject) => {
      const salt = 10;
      bcrypt.hash(data, salt, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }
  static deskrip(data) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(data.password, data.hash, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }
}

module.exports = Bcrypt;
