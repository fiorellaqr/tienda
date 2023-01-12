const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// create user (Crear usuario)
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users (Mostrar a todos los usuarios)
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user (Buscar Usuario por Id)
router.get("/users/:id", (req, res) => {
  const { idt } = req.params;
  userSchema
    .findById(idt)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user (Eliminar a un usuario)
router.delete("/users/:id", (req, res) => {
  const { idt } = req.params;
  userSchema
    .remove({ _id: idt })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user (Actualizar a un usuario)
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { idt, nombre, precio, stock, codigo, categoria, img } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { idt, nombre, precio, stock, codigo, categoria, img } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
