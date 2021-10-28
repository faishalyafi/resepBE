const express = require("express");
const router = express.Router();
const authController = require("../controller/auth/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/cekusername", authController.cekUsername);
router.post("/cekemail", authController.cekEmail);

module.exports = router;
