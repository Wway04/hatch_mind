const Answer = require("../models/answer");

const answerController = {
  create: (req, res) => {
    const { userId, quizQuestionId, selectedOption, isCorrect } = req.body;
    Answer.create(userId, quizQuestionId, selectedOption, isCorrect)
      .then((result) => res.status(201).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Error saving answer", error: err })
      );
  },

  getByUserId: (req, res) => {
    const { userId } = req.params;
    Answer.findByUserId(userId)
      .then((answers) => res.status(200).json(answers))
      .catch((err) =>
        res.status(500).json({ message: "Error fetching answers", error: err })
      );
  },

  update: (req, res) => {
    const { id } = req.params;
    const { selectedOption, isCorrect } = req.body;
    Answer.update(id, selectedOption, isCorrect)
      .then((result) => res.status(200).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Error updating answer", error: err })
      );
  },

  delete: (req, res) => {
    const { id } = req.params;
    Answer.delete(id)
      .then((result) => res.status(200).json({ message: "Answer deleted" }))
      .catch((err) =>
        res.status(500).json({ message: "Error deleting answer", error: err })
      );
  },
};

module.exports = answerController;
