require("dotenv").config();

const path = require("path");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8888;

app.get("/health", function (req, res) {
  res.send("OK");
});

app.listen(PORT, function () {
  console.log("server running on port:", PORT);
});
