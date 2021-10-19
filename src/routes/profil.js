const express = require("express");
const app = express();
const profilControler = require("../controller/auth/profilController");
const logMiddleware = require("../middleware/loginMiddleware");
const router = express.Router();
const multer = require("multer");
const upload = require("../helper/upload");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(nul, "public/images ");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(multer({ storage: storage, fileFilter: fileFilter }).single("image"));

app.use(logMiddleware.auth);
router
  .route("/profile")
  .get(profilControler.getProfile)
  .put(profilControler.updProfile);

module.exports = router;
