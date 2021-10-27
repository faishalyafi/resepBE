const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commenSchema = new Schema({
  rating: { type: Number, default: null },
  nama: { type: String, default: null },
  comment: { type: String, default: null },
  resep_id: {
    type: Schema.Types.ObjectId,
    ref: "content",
    required: true,
  },
});
const Comment = mongoose.model("comment", commenSchema);

module.exports = Comment;
