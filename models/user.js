const db = require("../config/db");

const User = {
  create: (name, email, password, dob, gender) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO users (name, email, password, dob, gender) VALUES (?, ?, ?, ?, ?)`;
      db.execute(query, [name, email, password, dob, gender], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  findById: (id) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE id = ?`;
      db.execute(query, [id], (err, result) => {
        if (err) reject(err);
        resolve(result[0]);
      });
    });
  },

  findByEmail: (email) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE email = ?`;
      db.execute(query, [email], (err, result) => {
        if (err) reject(err);
        resolve(result[0]);
      });
    });
  },

  update: (id, name, email, password, dob, gender) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE users SET name = ?, email = ?, password = ?, dob = ?, gender = ? WHERE id = ?`;
      db.execute(
        query,
        [name, email, password, dob, gender, id],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM users WHERE id = ?`;
      db.execute(query, [id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};

module.exports = User;
