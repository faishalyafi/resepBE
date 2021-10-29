const express = require("express");
const router = express.Router();
const authController = require("../controller/auth/authController");
const logMiddleware = require("../middleware/loginMiddleare");

router.post("/register", authController.register);
router.get("/verify", authController.verifikasi);
router.post("/login", logMiddleware.cekVerif, authController.login);
router.post("/cekusername", authController.cekUsername);
router.post("/cekemail", authController.cekEmail);

module.exports = router;
