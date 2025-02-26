const express = require("express");

const router = express.Router();

router.use("/users", require("./users.routes"));
router.use("/pokemon", require("./pokemon.routes"));
router.use("/starwars", require("./starwars.routes"));

module.exports = router;
