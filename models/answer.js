const db = require("../config/db");

const Answer = {
  create: (userId, quizQuestionId, selectedOption, isCorrect) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO answers (user_id, quiz_question_id, selected_option, is_correct) VALUES (?, ?, ?, ?)`;
      db.execute(
        query,
        [userId, quizQuestionId, selectedOption, isCorrect],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  },

  findByUserId: (userId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM answers WHERE user_id = ?`;
      db.execute(query, [userId], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  update: (id, selectedOption, isCorrect) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE answers SET selected_option = ?, is_correct = ? WHERE id = ?`;
      db.execute(query, [selectedOption, isCorrect, id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM answers WHERE id = ?`;
      db.execute(query, [id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};

module.exports = Answer;
