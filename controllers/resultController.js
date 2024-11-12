const Result = require("../models/result");

const resultController = {
  create: (req, res) => {
    const { userId, quizId, score, startedAt } = req.body;
    Result.create(userId, quizId, score, startedAt)
      .then((result) => res.status(201).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Error creating result", error: err })
      );
  },

  getByUserId: (req, res) => {
    const { userId } = req.params;
    Result.findByUserId(userId)
      .then((results) => res.status(200).json(results))
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Error fetching results by user", error: err })
      );
  },

  getByQuizId: (req, res) => {
    const { quizId } = req.params;
    Result.findByQuizId(quizId)
      .then((results) => res.status(200).json(results))
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Error fetching results by quiz", error: err })
      );
  },

  updateScore: (req, res) => {
    const { id } = req.params;
    const { score } = req.body;
    Result.updateScore(id, score)
      .then((result) => res.status(200).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Error updating score", error: err })
      );
  },

  delete: (req, res) => {
    const { id } = req.params;
    Result.delete(id)
      .then((result) => res.status(200).json({ message: "Result deleted" }))
      .catch((err) =>
        res.status(500).json({ message: "Error deleting result", error: err })
      );
  },
};

module.exports = resultController;
