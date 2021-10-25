const Content = require("../../model/contentModel");
const User = require("../../model/userModel");

class ContentController {
  static async add(req, res) {
    try {
      const username = req.user.username;
      const { nama_resep, kategori, tag, deskripsi, url, bahan, cara_buat } =
        req.body;
      const user = await User.findOne({ username });
      const cek = await Content.findOne({ url });
      if (cek) {
        res.status(409).json({ message: "conflict url", status: 409 });
      } else {
        const data = await Content.create({
          nama_resep,
          kategori,
          tag,
          deskripsi,
          url,
          bahan,
          cara_buat,
          user: user._id,
        });
        res
          .status(200)
          .json({ message: "Success add content", status: 200, data });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error add conten", status: 500 });
    }
  }
  static async getContenUser(req, res) {
    try {
      const username = req.user.username;
      const id = await User.findOne({ username });
      const user = id._id;
      const data = await Content.find({ user });
      res.status(200).json({ message: "List Content", status: 200, data });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error get Conten", status: 500 });
    }
  }
}

module.exports = ContentController;
