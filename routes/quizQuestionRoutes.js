const express = require("express");
const quizQuestionController = require("../controllers/quizQuestionController");
const router = express.Router();

router.post("/create", quizQuestionController.create); // Create
router.get("/quiz/:quizId", quizQuestionController.getAllByQuizId); // Read (By Quiz ID)
router.put("/:id", quizQuestionController.update); // Update
router.delete("/:id", quizQuestionController.delete); // Delete

module.exports = router;
