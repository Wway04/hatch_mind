const express = require("express");
const optionController = require("../controllers/optionController");
const router = express.Router();

router.post("/create", optionController.create); // Create
router.get("/:questionId", optionController.getAll); // Read (By Question ID)
router.put("/:id", optionController.update); // Update
router.delete("/:id", optionController.delete); // Delete

module.exports = router;
