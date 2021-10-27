const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bahanSchema = new Schema({ jenis: String }, { _id: false });
// const tagSchema = new Schema({ text: String }, { _id: false });
const contentSchema = new Schema({
  nama_resep: { type: String, default: null },
  kategori: { type: String, default: null },
  tag: [String],
  deskripsi: { type: String, default: null },
  url: { type: String, default: null },
  bahan: [bahanSchema],
  cara_buat: { type: String, default: null },
  image: { type: String, default: null },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  conter: { type: Number, default: 1 },
});

const Content = mongoose.model("content", contentSchema);
module.exports = Content;
