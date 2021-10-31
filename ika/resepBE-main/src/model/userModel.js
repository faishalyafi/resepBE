const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "user.jpg",
    },
    ttl:{
      type:String,
      default: null
    },
    alamat:{
      type:String,
      default: null
    },
    username:{
      type:String,
      default: null
    }
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;