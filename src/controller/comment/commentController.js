const Comment = require("../../model/commentModel");

class CommentController {
  static async addComment(req, res) {
    try {
      const { rating, nama, comment } = req.body;
      const resep_id = req.params.id;
      const data = await Comment.create({ rating, nama, comment, resep_id });
      res.status(200).json({
        message: "Success add comment",
        status: 200,
        data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error add comment", status: 500 });
    }
  }
  static async getComment(req, res) {
    try {
      const resep_id = req.params.id;
      const data = await Comment.find({ resep_id });
      res.status(200).json({ message: "List Comment", status: 200, data });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error" });
    }
  }
  static async getAllComment(req, res) {
    try {
      const data = await Comment.find().populate("resep_id");
      res.status(200).json({ message: "All List Comment", status: 200, data });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error All Comment" });
    }
  }
}

module.exports = CommentController;
