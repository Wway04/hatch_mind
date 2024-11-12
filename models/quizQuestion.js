const db = require("../config/db");

const QuizQuestion = {
  create: (quizId, questionId, questionOrder) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO quiz_question (quiz_id, question_id, question_order) VALUES (?, ?, ?)`;
      db.execute(query, [quizId, questionId, questionOrder], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  findAllByQuizId: (quizId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM quiz_question WHERE quiz_id = ? ORDER BY question_order`;
      db.execute(query, [quizId], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  update: (id, quizId, questionId, questionOrder) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE quiz_question SET quiz_id = ?, question_id = ?, question_order = ? WHERE id = ?`;
      db.execute(
        query,
        [quizId, questionId, questionOrder, id],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM quiz_question WHERE id = ?`;
      db.execute(query, [id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};

module.exports = QuizQuestion;
