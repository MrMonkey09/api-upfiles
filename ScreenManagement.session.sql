USE wenardo;
CREATE TABLE Departments (
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    PRIMARY KEY (ID)
);
SELECT Name
FROM departments
WHERE Name = "Soporte Tecnico Tecnológico";
/*  */
INSERT INTO departments(name)
VALUES ("Soporte Tecnico Tecnológico");
INSERT INTO users(name)
VALUES ("TIC");
INSERT INTO departments(name)
VALUES ("TIC");
INSERT INTO departments(name)
VALUES ("TIC");
INSERT INTO departments(name)
VALUES ("TIC");
INSERT INTO departments(name)
VALUES ("TIC");
/*  */
CREATE DATABASE screen_management;
DROP DATABASE departments;
DROP TABLE screens;
DROP TABLE users;
DROP TABLE groups_screen;
DROP TABLE locations;
DROP TABLE departments;
/*  */
CREATE TABLE departments(
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(255) NOT NULL UNIQUE,
    PRIMARY KEY (ID)
);
CREATE TABLE locations(
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(255) NOT NULL UNIQUE,
    PRIMARY KEY (ID)
);
CREATE TABLE groups_screen(
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    DepartmentID int NOT NULL,
    PRIMARY KEY (ID),
    CONSTRAINT FK_GroupScreenDepartment FOREIGN KEY (DepartmentID) REFERENCES departments(ID)
);
CREATE TABLE users(
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Password varchar(255) NOT NULL,
    Email varchar(255) NOT NULL,
    Rut varchar(255) NOT NULL UNIQUE,
    DepartmentID int NOT NULL,
    PRIMARY KEY (ID),
    CONSTRAINT FK_UserDepartment FOREIGN KEY (DepartmentID) REFERENCES departments(ID)
);
CREATE TABLE screens(
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    LocationID int NOT NULL,
    DepartmentID int NOT NULL,
    GroupScreenID int,
    PRIMARY KEY (ID),
    CONSTRAINT FK_ScreenLocation FOREIGN KEY (DepartmentID) REFERENCES departments(ID),
    CONSTRAINT FK_ScreenDepartment FOREIGN KEY (DepartmentID) REFERENCES departments(ID),
    CONSTRAINT FK_ScreenGroupScreen FOREIGN KEY (GroupScreenID) REFERENCES groups_screen(ID),
);