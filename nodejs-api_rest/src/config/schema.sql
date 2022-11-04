DROP DATABASE IF EXISTS api;

CREATE DATABASE api;

USE api;

CREATE TABLE
    IF NOT EXISTS users (
        id INT(11) AUTO_INCREMENT,
        name VARCHAR(200),
        sex ENUM('M', 'F') NOT NULL,
        email varchar(200) NOT NULL,
        PRIMARY KEY (id)
    );

INSERT INTO users VALUES(DEFAULT, 'Mario', 'M', 'mario@gmail.com');

INSERT INTO users
VALUES (
        DEFAULT,
        'Pedro',
        'M',
        'pedro@outlook.com'
    );