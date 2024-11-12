const User = require("../models/user");

const userController = {
  create: (req, res) => {
    const { name, email, password, dob, gender } = req.body;
    User.create(name, email, password, dob, gender)
      .then((result) => res.status(201).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Error creating user", error: err })
      );
  },

  getById: (req, res) => {
    const { id } = req.params;
    User.findById(id)
      .then((user) => res.status(200).json(user))
      .catch((err) =>
        res.status(500).json({ message: "Error fetching user", error: err })
      );
  },

  getByEmail: (req, res) => {
    const { email } = req.params;
    User.findByEmail(email)
      .then((user) => res.status(200).json(user))
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Error fetching user by email", error: err })
      );
  },

  update: (req, res) => {
    const { id } = req.params;
    const { name, email, password, dob, gender } = req.body;
    User.update(id, name, email, password, dob, gender)
      .then((result) => res.status(200).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Error updating user", error: err })
      );
  },

  delete: (req, res) => {
    const { id } = req.params;
    User.delete(id)
      .then((result) => res.status(200).json({ message: "User deleted" }))
      .catch((err) =>
        res.status(500).json({ message: "Error deleting user", error: err })
      );
  },
};

module.exports = userController;
