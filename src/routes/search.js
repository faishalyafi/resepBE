const express = require("express");
const ContentController = require("../controller/content/contenController");
const router = express.Router();

router.post("/", ContentController.getSearch);
router.post("/tag", ContentController.getSearchtag);
router.post("/bahan", ContentController.getSearchBahan);

module.exports = router;
