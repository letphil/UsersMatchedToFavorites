const express = require("express");
const { list } = require("../../../controllers/starwars.controllers");

const router = express.Router();

router.get("/", async function (req, res) {
  const getStarwarsCharacters = await list();
  res.send(getStarwarsCharacters);
});

module.exports = router;
