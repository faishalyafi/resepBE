require("dotenv").config();
require("./src/utils/dbConnect");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const routerIndex = require("./src/routes");
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static("public/images"));

//! router
app.use("/", routerIndex);
//!

app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found", status: 404 });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
