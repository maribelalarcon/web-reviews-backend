const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello");
});

router.get("/:id", (req, res) => {
  res.send("Hello");
});

router.post("/", (req, res) => {
  res.send("Got a POST request");
});

router.patch("/:id", (req, res) => {
  res.send("Update");
});

router.delete("/:id", (req, res) => {
  res.send("Delete user");
});
module.exports = router;
