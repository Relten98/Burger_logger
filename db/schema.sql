DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

CREATE TABLE people (
id integer,
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN NOT NULL
);