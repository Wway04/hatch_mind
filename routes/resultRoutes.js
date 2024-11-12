const express = require("express");
const resultController = require("../controllers/resultController");
const router = express.Router();

router.post("/create", resultController.create); // Create
router.get("/user/:userId", resultController.getByUserId); // Read (By User ID)
router.get("/quiz/:quizId", resultController.getByQuizId); // Read (By Quiz ID)
router.put("/:id", resultController.updateScore); // Update (Score)
router.delete("/:id", resultController.delete); // Delete

module.exports = router;
