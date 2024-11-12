const db = require("../config/db");

const Quiz = {
  create: (name, length, description, categoryId) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO quizes (name, length, description, category_id) VALUES (?, ?, ?, ?)`;
      db.execute(
        query,
        [name, length, description, categoryId],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  },

  findAll: () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM quizes`;
      db.execute(query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  findById: (id) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM quizes WHERE id = ?`;
      db.execute(query, [id], (err, result) => {
        if (err) reject(err);
        resolve(result[0]);
      });
    });
  },

  update: (id, name, length, description, categoryId) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE quizes SET name = ?, length = ?, description = ?, category_id = ? WHERE id = ?`;
      db.execute(
        query,
        [name, length, description, categoryId, id],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM quizes WHERE id = ?`;
      db.execute(query, [id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};

module.exports = Quiz;
