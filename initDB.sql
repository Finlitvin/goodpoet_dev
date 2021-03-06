DROP DATABASE goodpoet;

CREATE DATABASE goodpoet;

USE goodpoet;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	email varchar(25) NOT NULL,
	password varchar(100) NOT NULL,
	PRIMARY KEY (id),
	UNIQUE(email)
);

CREATE TABLE users_roles (
	id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
	role_id INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE roles (
	id INT NOT NULL AUTO_INCREMENT,
	value varchar(25) NOT NULL,
	PRIMARY KEY (id),
	UNIQUE(value)
);

CREATE TABLE reviews (
	id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
	poem_id INT NOT NULL,
	review varchar(500) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE poems (
	id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
	tittle varchar(25) NOT NULL,
	content TEXT NOT NULL,
	pub_date DATE NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE favorites (
	id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
	favorite_id INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE profiles (
	id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
	first_name varchar(25) NOT NULL,
	last_name varchar(25) NOT NULL,
	bio varchar(255),
	PRIMARY KEY (id)
);

ALTER TABLE users_roles
ADD FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE users_roles
ADD FOREIGN KEY (role_id) REFERENCES roles (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE reviews
ADD FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE reviews
ADD FOREIGN KEY (poem_id) REFERENCES poems (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE poems
ADD FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE favorites
ADD FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE profiles
ADD FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO roles (id, value) VALUES
(1, 'admin'),
(2, 'author');
