const express = require("express");
const answerController = require("../controllers/answerController");
const router = express.Router();

router.post("/create", answerController.create); // Create
router.get("/:userId", answerController.getByUserId); // Read (By User ID)
router.put("/:id", answerController.update); // Update
router.delete("/:id", answerController.delete); // Delete

module.exports = router;
