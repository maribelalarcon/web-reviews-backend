const express = require("express");
const router = express.Router();
const User = require("../db/user");
const db = require("../db/db");

router.get("/", async (req, res) => {
  const client = await db.getClient();
  const users = await User.get(client);
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const client = await db.getClient();
  const user = await User.getById(client, req.params.id);
  res.send(user);
});

router.post("/", async (req, res) => {
  const client = await db.getClient();
  await User.create(client, req.body);
  res.send(req.body);
});

router.put("/:id", async (req, res) => {
  const client = await db.getClient();
  await User.update(client, req.body, req.params.id);
  res.send(req.body);
});

router.delete("/:id", async (req, res) => {
  const client = await db.getClient();
  await User.remove(client, req.params.id);
  res.send("Delete user");
});

module.exports = router;
