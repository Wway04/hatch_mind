const QuizQuestion = require("../models/quizQuestion");

const quizQuestionController = {
  create: (req, res) => {
    const { quizId, questionId, questionOrder } = req.body;
    QuizQuestion.create(quizId, questionId, questionOrder)
      .then((result) => res.status(201).json(result))
      .catch((err) =>
        res.status(500).json({
          message: "Error creating quiz-question relation",
          error: err,
        })
      );
  },

  getAllByQuizId: (req, res) => {
    const { quizId } = req.params;
    QuizQuestion.findAllByQuizId(quizId)
      .then((quizQuestions) => res.status(200).json(quizQuestions))
      .catch((err) =>
        res.status(500).json({
          message: "Error fetching quiz-question relations",
          error: err,
        })
      );
  },

  update: (req, res) => {
    const { id } = req.params;
    const { quizId, questionId, questionOrder } = req.body;
    QuizQuestion.update(id, quizId, questionId, questionOrder)
      .then((result) => res.status(200).json(result))
      .catch((err) =>
        res.status(500).json({
          message: "Error updating quiz-question relation",
          error: err,
        })
      );
  },

  delete: (req, res) => {
    const { id } = req.params;
    QuizQuestion.delete(id)
      .then((result) =>
        res.status(200).json({ message: "Quiz-question relation deleted" })
      )
      .catch((err) =>
        res.status(500).json({
          message: "Error deleting quiz-question relation",
          error: err,
        })
      );
  },
};

module.exports = quizQuestionController;
