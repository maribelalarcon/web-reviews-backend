const express = require("express");
const router = express.Router();
const Review = require("../db/review");
const db = require("../db/db");

router.get("/", async (req, res) => {
  const client = await db.getClient();
  const review = await Review.get(client);
  res.send(review);
});

router.get("/:id", async (req, res) => {
  const client = await db.getClient();
  const review = await Review.getById(client, req.params.id);
  res.send(review);
});

router.post("/", async (req, res) => {
  const client = await db.getClient();
  await Review.create(client, req.body);
  res.send(req.body);
});

router.put("/:id", async (req, res) => {
  const client = await db.getClient();
  await Review.update(client, req.body, req.params.id);
  res.send(req.body);
});

router.delete("/:id", async (req, res) => {
  const client = await db.getClient();
  await Review.remove(client, req.params.id);
  res.send("Delete Review");
});

module.exports = router;
