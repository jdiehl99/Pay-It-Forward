DROP DATABASE IF EXISTS payForward_db;
CREATE DATABASE payForward_db;

USE payForward_db;

CREATE TABLE user_table(
    id INT (11) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    loan_amt FLOAT (5,2) NOT NULL,
    user_story LONGTEXT NOT NULL,
    user_img VARCHAR (255),
    created DATETIME NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE loans_table(
    id INT (11) AUTO_INCREMENT NOT NULL,
    userid INT (11),
    donorid INT (11),
    charityid INT (11),
    completed DATE,
    PRIMARY KEY (ID)
);


CREATE TABLE donors_table (
    id INT (11) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR (255) NOT NULL,
    last_name VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    anonymous BOOLEAN DEFAULT false,
    created DATETIME NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE charity_table(
    id INT (11) AUTO_INCREMENT NOT NULL,
    charity_name VARCHAR(255) NOT NULL,
    overview LONGTEXT,
    PRIMARY KEY(id)
);


