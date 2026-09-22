const express = require("express");
const validateUser =require("../middlewares/user.validation.js");

const router = express.Router();

const userController = require("../controllers/user.controller.js");

// GET /api/users
router.get("/", userController.getAllUsers);

// GET /api/users/:id
router.get("/:id", userController.getUser);

// POST /api/users
router.post("/",validateUser, userController.createUser);

// DELETE /api/users/:id
router.delete("/:id", userController.deleteUser);

module.exports = router;
