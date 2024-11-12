const Option = require("../models/option");

const optionController = {
  create: (req, res) => {
    const { content, questionId, isCorrect } = req.body;
    Option.create(content, questionId, isCorrect)
      .then((result) => res.status(201).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Error creating option", error: err })
      );
  },

  getAll: (req, res) => {
    const { questionId } = req.params;
    Option.findAll(questionId)
      .then((options) => res.status(200).json(options))
      .catch((err) =>
        res.status(500).json({ message: "Error fetching options", error: err })
      );
  },

  update: (req, res) => {
    const { id } = req.params;
    const { content, questionId, isCorrect } = req.body;
    Option.update(id, content, questionId, isCorrect)
      .then((result) => res.status(200).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Error updating option", error: err })
      );
  },

  delete: (req, res) => {
    const { id } = req.params;
    Option.delete(id)
      .then((result) => res.status(200).json({ message: "Option deleted" }))
      .catch((err) =>
        res.status(500).json({ message: "Error deleting option", error: err })
      );
  },
};

module.exports = optionController;
