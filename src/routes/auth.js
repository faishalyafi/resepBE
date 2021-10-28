const express = require("express");
const router = express.Router();
const authController = require("../controller/auth/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/cekform", authController.cekForm);

module.exports = router;
