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
  static async getWatch(req, res) {
    try {
      const id = req.params.id;
      const db = await Content.findById(id);
      const add = db.conter + 1;
      const data = await Content.findByIdAndUpdate(id, {
        conter: add,
      }).populate("user");
      res.status(200).json({ message: "Data resep", status: 200, data });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error getWatch", status: 500 });
    }
  }
  static async getAll(req, res) {
    try {
      const data = await Content.find();
      res.status(200).json({ message: "All content", status: 200, data });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error getAll", status: 500 });
    }
  }
  static async delConten(req, res) {
    try {
      const id = req.params.id;
      const data = await Content.findByIdAndDelete(id);
      var pesan = "";
      var stat = 0;
      if (data) {
        pesan = "Success dihapus";
        stat = 200;
      } else {
        pesan = "Data sudah terhapus";
        stat = 404;
      }
      res.status(stat).json({ message: pesan, status: stat, data });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error delConten", status: 500 });
    }
  }
  static async updConten(req, res) {
    try {
      const {
        id,
        nama_resep,
        kategori,
        tag,
        deskripsi,
        url,
        bahan,
        cara_buat,
      } = req.body;

      const data = await Content.findOneAndUpdate(
        { _id: id },
        {
          $set: { nama_resep, kategori, tag, deskripsi, url, bahan, cara_buat },
        }
      );
      var stat = 0;
      var pesan = "";
      if (data) {
        stat = 200;
        pesan = "Update succes";
      } else {
        stat = 404;
        pesan = "Not Found";
      }
      res.status(stat).json({ message: pesan, status: stat, data });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error updConten", status: 500 });
    }
  }
}

module.exports = ContentController;