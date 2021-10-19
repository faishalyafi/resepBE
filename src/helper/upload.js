const multer = require("multer");
const fileFilter = require("../middleware/filterMidleware");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(nul, "public/images ");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
