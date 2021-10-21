const express = require("express");
const profilControler = require("../controller/profile/profileController");
const upload = require("../helper/upload");
const logMiddleware = require("../middleware/loginMiddleare");
const router = express.Router();

router
  .route("/profile")
  .get(logMiddleware.auth, profilControler.getProfile)
  .post(logMiddleware.auth, upload, profilControler.updProfile);

module.exports = router;
