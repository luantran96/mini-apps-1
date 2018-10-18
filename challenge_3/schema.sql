DROP DATABASE challenge_3;
CREATE DATABASE challenge_3;

USE challenge_3;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) DEFAULT NULL,
  email VARCHAR(50) DEFAULT NULL,
  password VARCHAR(50) DEFAULT NULL,
  line1 VARCHAR(30) DEFAULT NULL,
  line2 VARCHAR(30) DEFAULT NULL,
  city VARCHAR(30) DEFAULT NULL,
  state VARCHAR(30) DEFAULT NULL,
  ZIP VARCHAR(30) DEFAULT NULL,
  CCnumber INT(30) DEFAULT NULL,
  phoneNumber INT(30) DEFAULT NULL,
  expiredDate VARCHAR(30) DEFAULT NULL,
  CVV INT(5) DEFAULT NULL,
  billingZIP VARCHAR(30) DEFAULT NULL,
  PRIMARY KEY (id),
  createdAt datetime DEFAULT NULL,
  updatedAt datetime DEFAULT NULL
);




/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*