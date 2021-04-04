DROP DATABASE IF EXISTS burgerizer_db;

CREATE DATABASE burgerizer_db;

USE burgerizer_db;

CREATE TABLE borger (
id integer AUTO_INCREMENT,
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)
);