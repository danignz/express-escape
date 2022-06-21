const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares");
const Team = require("../models/Team");
const User = require("../models/User");
const Enigma = require("../models/Enigma");

router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    const enigmas = await Enigma.find({});
    res.render("enigmas/enigmas", { enigmas });
  } catch (error) {
    next(error);
  }
});

router.get("/create", async (req, res, next) => {
  try {
    const teams = await Team.find({});
    res.render("enigmas/new-enigma", { teams });
  } catch (error) {
    next(error);
  }
});

router.post("/create", async (req, res, next) => {
  const { title, number, description, image, team, solved } = req.body;

  try {
    await Enigma.create({
      title,
      number,
      description,
      image,
      team,
      solved: Boolean(solved),
    });
    res.redirect("/enigmas");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
