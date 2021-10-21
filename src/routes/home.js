const express = require("express");
const User = require("../model/userModel");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const cekUser = await User.findOne({ username: "admin" });
    if (!cekUser) {
      await User.create({
        username: "admin",
        email: "admin@gmail.com",
        password: "admin",
        role: 1,
      });
    }
    res.status(200).json({ message: "selamat datang di home" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error", status: 500 });
  }
});

module.exports = router;

module.exports = router;
