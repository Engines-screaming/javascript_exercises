DROP DATABASE IF EXISTS feedback_exercise;

CREATE DATABASE feedback_exercise;

CREATE TABLE users (
        username VARCHAR(20) NOT NULL, 
        password TEXT NOT NULL, 
        email VARCHAR(50) NOT NULL, 
        first_name VARCHAR(30) NOT NULL, 
        last_name VARCHAR(30) NOT NULL, 
        PRIMARY KEY (username), 
        UNIQUE (username)
);

CREATE TABLE feedback (
        id SERIAL NOT NULL, 
        title VARCHAR(100) NOT NULL, 
        content TEXT NOT NULL, 
        username VARCHAR(20) NOT NULL, 
        PRIMARY KEY (id), 
        FOREIGN KEY(username) REFERENCES users (username)
);