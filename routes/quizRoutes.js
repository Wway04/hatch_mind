const express = require("express");
const quizController = require("../controllers/quizController");
const router = express.Router();

router.post("/create", quizController.create); // Create
router.get("/", quizController.getAll); // Read (All Quizzes)
router.get("/:id", quizController.getById); // Read (By ID)
router.put("/:id", quizController.update); // Update
router.delete("/:id", quizController.delete); // Delete

module.exports = router;
