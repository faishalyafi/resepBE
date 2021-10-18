const express = require("express");
const router = express.Router();

router
  .route("/profile")
  .put((req, res) => {
    res.send("update profile");
  })
  .get((req, res) => {
    res.send("Data profile");
  });
