CREATE DATABASE IF NOT EXISTS hatch_mind;

-- Sử dụng database hatch_mind
USE hatch_mind;

-- Bảng lưu trữ thông tin người dùng
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    dob DATE,
    gender ENUM('Male', 'Female', 'Other'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Bảng lưu trữ danh mục câu hỏi
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

-- Bảng lưu trữ thông tin bài trắc nghiệm
CREATE TABLE quizes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    length INT,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Bảng lưu trữ câu hỏi
CREATE TABLE questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    category_id INT,
    difficulty_level ENUM('Easy', 'Medium', 'Hard'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Bảng liên kết giữa bài trắc nghiệm và câu hỏi
CREATE TABLE quiz_question (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quiz_id INT,
    question_id INT,
    question_order INT,
    FOREIGN KEY (quiz_id) REFERENCES quizes(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

-- Bảng lưu trữ các lựa chọn cho mỗi câu hỏi
CREATE TABLE options (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    question_id INT,
    is_correct BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

-- Bảng lưu trữ câu trả lời của người dùng
CREATE TABLE answers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    quiz_question_id INT,
    selected_option INT,
    answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_correct BOOLEAN,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (quiz_question_id) REFERENCES quiz_question(id),
    FOREIGN KEY (selected_option) REFERENCES options(id)
);

-- Bảng lưu trữ kết quả của người dùng sau khi hoàn thành bài trắc nghiệm
CREATE TABLE results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    quiz_id INT,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    score DECIMAL(5,2),
    started_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (quiz_id) REFERENCES quizes(id)
);