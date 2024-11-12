const db = require("../config/db");

const Question = {
  create: (content, categoryId, difficultyLevel) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO questions (content, category_id, difficulty_level) VALUES (?, ?, ?)`;
      db.execute(
        query,
        [content, categoryId, difficultyLevel],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  },

  findAll: () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM questions`;
      db.execute(query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  update: (id, content, categoryId, difficultyLevel) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE questions SET content = ?, category_id = ?, difficulty_level = ? WHERE id = ?`;
      db.execute(
        query,
        [content, categoryId, difficultyLevel, id],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM questions WHERE id = ?`;
      db.execute(query, [id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};

module.exports = Question;
