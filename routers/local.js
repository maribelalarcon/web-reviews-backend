const express = require("express");
const router = express.Router();
const Local = require("../db/local");
const db = require("../db/db");

//obtiene los locales
router.get("/", async (req, res) => {
  const client = await db.getClient();
  const local = await Local.get(client);
  res.send(local);
});

//obtiene un local elegido
router.get("/:id", async (req, res) => {
  const client = await db.getClient();
  const local = await Local.getById(client, req.params.id);
  res.send(local);
});

//crea un nuevo local
router.post("/", async (req, res) => {
  const client = await db.getClient();
  await Local.create(client, req.body);
  res.send(req.body);
});

//actualiza
router.put("/:id", async (req, res) => {
  const client = await db.getClient();
  await Local.update(client, req.body, req.params.id);
  res.send(req.body);
});

//elimina
router.delete("/:id", async (req, res) => {
  const client = await db.getClient();
  await Local.remove(client, req.params.id);
  res.send("Delete local");
});

module.exports = router;
