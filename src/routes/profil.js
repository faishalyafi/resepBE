const express = require("express");
const app = express();
const profilControler = require("../controller/auth/profilController");
const logMiddleware = require("../middleware/loginMiddleware");
const router = express.Router();
const upload = require("../helper/upload");

app.use(logMiddleware.auth);
router
  .route("/profile")
  .get(profilControler.getProfile)
  .put(upload, profilControler.updProfile);

module.exports = router;
