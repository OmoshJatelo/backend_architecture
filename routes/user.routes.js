const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controller.js");

// GET /api/users
router.get("/", userController.getAllUsers);

// GET /api/users/:id
router.get("/:id", userController.getUser);

// POST /api/users
router.post("/", userController.createUser);

// DELETE /api/users/:id
router.delete("/:id", userController.deleteUser);

module.exports = router;
