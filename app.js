require("dotenv").config();
require("./src/utils/dbConnect");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const logMiddleware = require("./src/middleware/loginMiddleware");
const routerAuth = require("./src/routes/auth");
const routerProfil = require("./src/routes/profil");
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", routerAuth);
app.use("/user", logMiddleware.auth, routerProfil);

app.get("/home", logMiddleware.auth, logMiddleware.author, (req, res) => {
  res.send("halaman home");
});

app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found", status: 404 });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
