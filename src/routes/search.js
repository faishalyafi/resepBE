const express = require("express");
const ContentController = require("../controller/content/contenController");
const router = express.Router();

router.get("/", ContentController.getSearch);
router.get("/tag", ContentController.getSearchtag);
router.get("/bahan", ContentController.getSearchBahan);


module.exports = router;
