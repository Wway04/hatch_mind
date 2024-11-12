const db = require("../config/db");

const Result = {
  create: (userId, quizId, score, startedAt) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO results (user_id, quiz_id, score, started_at) VALUES (?, ?, ?, ?)`;
      db.execute(query, [userId, quizId, score, startedAt], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  findByUserId: (userId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM results WHERE user_id = ?`;
      db.execute(query, [userId], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  findByQuizId: (quizId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM results WHERE quiz_id = ?`;
      db.execute(query, [quizId], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  updateScore: (id, score) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE results SET score = ? WHERE id = ?`;
      db.execute(query, [score, id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM results WHERE id = ?`;
      db.execute(query, [id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};

module.exports = Result;
