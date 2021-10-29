const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    image: { type: String, default: "user.png" },
    nama_lengkap: { type: String, default: null },
    tempat: { type: String, default: null },
    tanggal: { type: String, default: null },
    alamat: { type: String, default: null },
    verifikasi: { type: Boolean, default: false },
    token: { type: String, required: true },
    role: { type: Number, default: 2 },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
