const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares");

router.get("/", isLoggedIn, (req, res, next) => {
  res.render("enigmas");
});

module.exports = router;
