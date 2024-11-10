const db = require("../config/db");

const Category = {
  create: (name, description) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO categories (name, description) VALUES (?, ?)`;
      db.execute(query, [name, description], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  findAll: () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM categories`;
      db.execute(query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  update: (id, name, description) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE categories SET name = ?, description = ? WHERE id = ?`;
      db.execute(query, [name, description, id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM categories WHERE id = ?`;
      db.execute(query, [id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};

module.exports = Category;
