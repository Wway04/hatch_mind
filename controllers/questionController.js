const Question = require("../models/question");

const questionController = {
  create: (req, res) => {
    const { content, categoryId, difficultyLevel } = req.body;
    Question.create(content, categoryId, difficultyLevel)
      .then((result) => res.status(201).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Error creating question", error: err })
      );
  },

  getAll: (req, res) => {
    Question.findAll()
      .then((questions) => res.status(200).json(questions))
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Error fetching questions", error: err })
      );
  },

  update: (req, res) => {
    const { id } = req.params;
    const { content, categoryId, difficultyLevel } = req.body;
    Question.update(id, content, categoryId, difficultyLevel)
      .then((result) => res.status(200).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Error updating question", error: err })
      );
  },

  delete: (req, res) => {
    const { id } = req.params;
    Question.delete(id)
      .then((result) => res.status(200).json({ message: "Question deleted" }))
      .catch((err) =>
        res.status(500).json({ message: "Error deleting question", error: err })
      );
  },
};

module.exports = questionController;
