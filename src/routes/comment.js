const express = require("express");
const CommentController = require("../controller/comment/commentController");
const router = express.Router();

router.get("/", CommentController.getAllComment);
router.get("/:id", CommentController.getComment);
router.post("/add/:id", CommentController.addComment);

module.exports = router;
