const express = require("express");
const router = express.Router();
const routerAuth = require("./auth");
const routerProfile = require("./profil");
const routerHome = require("./home");
const routerContent = require("./content");

router.use("/", routerHome);
router.use("/auth", routerAuth);
router.use("/user", routerProfile);
router.use("/content", routerContent);

module.exports = router;
