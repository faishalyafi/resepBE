require("dotenv").config();
require("./src/utils/dbConnect");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const port = process.env.PORT || 3000;
const path = require("path");
const routerAuth = require("./src/routes/auth");
const routerProfile = require("./src/routes/profil");
const routerHome = require("./src/routes/home");

app.use(morgan("dev"));
app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//! router
app.use("/", routerHome);
app.use("/auth", routerAuth);
app.use("/user", routerProfile);
app.use("/public", express.static(path.join(__dirname, "public")));

//!

app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found", status: 404 });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
