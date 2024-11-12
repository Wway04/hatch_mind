const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/create", userController.create); // Create
router.get("/:id", userController.getById); // Read (By ID)
router.get("/email/:email", userController.getByEmail); // Read (By Email)
router.put("/:id", userController.update); // Update
router.delete("/:id", userController.delete); // Delete

module.exports = router;
