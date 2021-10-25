const express = require("express");
const ContentController = require("../controller/content/contenController");
const logMiddleware = require("../middleware/loginMiddleare");
const router = express.Router();

router.get("/", logMiddleware.auth, ContentController.getContenUser);
router.post("/add", logMiddleware.auth, ContentController.add);

module.exports = router;
