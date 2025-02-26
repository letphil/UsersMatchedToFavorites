const express = require("express");
const { list } = require("../../../controllers/pokemon.controllers");

const router = express.Router();

router.get("/", async function (req, res) {
  const getPokemon = await list();
  res.send(getPokemon);
});

module.exports = router;
