const express = require("express");
const tokenCtrl = require("../../controller/tokenCtrl");
const router = express.Router();

router.get("/userID/:userId", tokenCtrl.token);

module.exports = router;
