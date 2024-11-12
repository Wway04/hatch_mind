const Quiz = require("../models/quiz");

const quizController = {
  create: (req, res) => {
    const { name, length, description, categoryId } = req.body;
    Quiz.create(name, length, description, categoryId)
      .then((result) => res.status(201).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Error creating quiz", error: err })
      );
  },

  getAll: (req, res) => {
    Quiz.findAll()
      .then((quizzes) => res.status(200).json(quizzes))
      .catch((err) =>
        res.status(500).json({ message: "Error fetching quizzes", error: err })
      );
  },

  getById: (req, res) => {
    const { id } = req.params;
    Quiz.findById(id)
      .then((quiz) => res.status(200).json(quiz))
      .catch((err) =>
        res.status(500).json({ message: "Error fetching quiz", error: err })
      );
  },

  update: (req, res) => {
    const { id } = req.params;
    const { name, length, description, categoryId } = req.body;
    Quiz.update(id, name, length, description, categoryId)
      .then((result) => res.status(200).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Error updating quiz", error: err })
      );
  },

  delete: (req, res) => {
    const { id } = req.params;
    Quiz.delete(id)
      .then((result) => res.status(200).json({ message: "Quiz deleted" }))
      .catch((err) =>
        res.status(500).json({ message: "Error deleting quiz", error: err })
      );
  },
};

module.exports = quizController;
