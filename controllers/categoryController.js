const Category = require("../models/category");

const categoryController = {
  create: (req, res) => {
    const { name, description } = req.body;
    Category.create(name, description)
      .then((result) => res.status(201).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Error creating category", error: err })
      );
  },

  getAll: (req, res) => {
    Category.findAll()
      .then((categories) => res.status(200).json(categories))
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Error fetching categories", error: err })
      );
  },

  update: (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    Category.update(id, name, description)
      .then((result) => res.status(200).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Error updating category", error: err })
      );
  },

  delete: (req, res) => {
    const { id } = req.params;
    Category.delete(id)
      .then((result) => res.status(200).json({ message: "Category deleted" }))
      .catch((err) =>
        res.status(500).json({ message: "Error deleting category", error: err })
      );
  },
};

module.exports = categoryController;
