DROP database IF EXISTS burgerizer_db;
CREATE DATABASE burgerizer_db;
USE burgerizer_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);