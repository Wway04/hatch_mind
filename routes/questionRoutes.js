const express = require("express");
const questionController = require("../controllers/questionController");
const router = express.Router();

router.post("/create", questionController.create); // Create
router.get("/", questionController.getAll); // Read (All Questions)
router.put("/:id", questionController.update); // Update
router.delete("/:id", questionController.delete); // Delete

module.exports = router;
