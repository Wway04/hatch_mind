const db = require("../config/db");

const Option = {
  create: (content, questionId, isCorrect) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO options (content, question_id, is_correct) VALUES (?, ?, ?)`;
      db.execute(query, [content, questionId, isCorrect], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  findAll: (questionId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM options WHERE question_id = ?`;
      db.execute(query, [questionId], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  update: (id, content, questionId, isCorrect) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE options SET content = ?, question_id = ?, is_correct = ? WHERE id = ?`;
      db.execute(query, [content, questionId, isCorrect, id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM options WHERE id = ?`;
      db.execute(query, [id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};

module.exports = Option;
