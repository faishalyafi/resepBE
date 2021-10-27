const express = require("express");
const ContentController = require("../controller/content/contenController");
const logMiddleware = require("../middleware/loginMiddleare");
const router = express.Router();

router.get("/", ContentController.getAll);
router.get("/user", logMiddleware.auth, ContentController.getContenUser);
router.get("/:id?", ContentController.getWatch);
router.post("/add", logMiddleware.auth, ContentController.add);
router.post("/update", ContentController.updConten);
router.delete("/:id", ContentController.delConten);

module.exports = router;
