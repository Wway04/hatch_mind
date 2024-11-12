const express = require("express");
const categoryController = require("../controllers/categoryController");
const router = express.Router();

router.post("/create", categoryController.create); // Create
router.get("/", categoryController.getAll); // Read (All Categories)
router.put("/:id", categoryController.update); // Update
router.delete("/:id", categoryController.delete); // Delete

module.exports = router;
