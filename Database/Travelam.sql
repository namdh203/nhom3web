-- Create the database if it does not exist
CREATE DATABASE IF NOT EXISTS Travelam;

-- Use the database
USE Travelam;

-- Create the "Customer" table
DROP TABLE IF EXISTS `Customer`;
CREATE TABLE IF NOT EXISTS Customer (
  accountID INT NOT NULL,
  name VARCHAR(255),
  cardNo VARCHAR(16),
  address TEXT,
  phoneNumber VARCHAR(15),
  email VARCHAR(255),
  passportNo VARCHAR(15),
  PRIMARY KEY (`accountID`)
);

-- Create the "Tour" table
DROP TABLE IF EXISTS Tour;
CREATE TABLE IF NOT EXISTS Tour (
  tourID INT NOT NULL,
  title VARCHAR(50),
  duration INT,
  price DOUBLE,
  priceCurrency VARCHAR(255),
  startDate DATE,
  endDate DATE,
  description MEDIUMTEXT,
  additionalInfo TEXT,
  demoImage MEDIUMTEXT,
  voting INT,
  PRIMARY KEY (tourID)
);

-- Create the "Tour_destinations" table
DROP TABLE IF EXISTS Tour_destinations;
CREATE TABLE IF NOT EXISTS Tour_destinations (
  tourID INT NOT NULL,
  destID INT NOT NULL,
  PRIMARY KEY (tourID, destID)
);

-- Create the "Destination" table
DROP TABLE IF EXISTS Destination;
CREATE TABLE IF NOT EXISTS Destination (
  destID INT NOT NULL,
  name VARCHAR(255),
  countryID INT NOT NULL,
  description MEDIUMTEXT,
  additionalInfo TEXT,
  demoImage MEDIUMTEXT,
  PRIMARY KEY (destID)
);

-- Create the "Accommodation" table
DROP TABLE IF EXISTS Accommodation;
CREATE TABLE IF NOT EXISTS Accommodation (
  accomID INT NOT NULL,
  name TEXT, 
  destID INT NOT NULL,
  pricePerNight DOUBLE,
  priceCurrency VARCHAR(10), -- Adjust the size to your needs
  address TEXT, -- Adjust the size to your needs
  telephoneNo VARCHAR(15), -- Adjust the size to your needs
  contactEmail VARCHAR(255), -- Adjust the size to your needs
  description MEDIUMTEXT,
  additionalInfo TEXT,
  demoImage MEDIUMTEXT,
  PRIMARY KEY (accomID)
);

-- Create the "Tour_accommodation" table
DROP TABLE IF EXISTS Tour_accommodation;
CREATE TABLE IF NOT EXISTS Tour_accommodation (
  tourID INT NOT NULL,
  accomID INT NOT NULL,
  roomNum INT,
  PRIMARY KEY (tourID, accomID)
);

-- Create the "Transportation" table
DROP TABLE IF EXISTS Transportation;
CREATE TABLE IF NOT EXISTS Transportation (
  transID INT NOT NULL,
  startDestID INT NOT NULL,
  endDestID INT NOT NULL,
  startTime DATE,
  endTime DATE,
  price DOUBLE,
  priceCurrency VARCHAR(255), 
  type VARCHAR(255),
  description MEDIUMTEXT,
  additionalInfo TEXT,
  demoImage MEDIUMTEXT,
  PRIMARY KEY (transID)
);

-- Create the "Tour_transportation" table
DROP TABLE IF EXISTS Tour_transportation;
CREATE TABLE IF NOT EXISTS Tour_transportation (
  tourID INT NOT NULL,
  transID INT NOT NULL,
  PRIMARY KEY (tourID, transID)
);

-- Create the "Account" table
DROP TABLE IF EXISTS Account;
CREATE TABLE IF NOT EXISTS Account (
  accountID INT NOT NULL,
  role VARCHAR(255), -- Adjust the size to your needs
  username VARCHAR(255), -- Adjust the size to your needs
  password VARCHAR(255), -- Adjust the size to your needs
  PRIMARY KEY (accountID)
);

-- Create the "Country" table
DROP TABLE IF EXISTS Country;
CREATE TABLE IF NOT EXISTS Country (
  countryID INT NOT NULL,
  countryName VARCHAR(255), -- Adjust the size to your needs
  PRIMARY KEY (countryID)
);

-- Create the "Restaurant" table
DROP TABLE IF EXISTS Restaurant;
CREATE TABLE IF NOT EXISTS Restaurant (
  restID INT NOT NULL,
  destID INT NOT NULL,
  name VARCHAR(255), -- Adjust the size to your needs
  address TEXT, -- Adjust the size to your needs
  telephoneNo VARCHAR(15), -- Adjust the size to your needs
  description MEDIUMTEXT,
  additionalInfo TEXT,
  demoImage MEDIUMTEXT,
  PRIMARY KEY (restID)
);

-- Create the "Tour_meal" table
DROP TABLE IF EXISTS Tour_meal;
CREATE TABLE IF NOT EXISTS Tour_meal (
  tourID INT NOT NULL,
  restID INT NOT NULL,
  timeSuggest DATE,
  PRIMARY KEY (tourID, restID)
);

-- Create the "Payment" table
DROP TABLE IF EXISTS Payment;
CREATE TABLE IF NOT EXISTS Payment (
  paymentID INT NOT NULL,
  customerID INT NOT NULL,
  tourID INT NOT NULL,
  payDate DATE,
  amount DECIMAL(10, 2),
  currency VARCHAR(10),
  PRIMARY KEY (paymentID)
);

-- Create the "Activity" table
DROP TABLE IF EXISTS Activity;
CREATE TABLE IF NOT EXISTS Activity (
  activityID INT NOT NULL,
  name VARCHAR(50), -- Adjust the size to your needs
  destID INT NOT NULL,
  type VARCHAR(255), -- Adjust the size to your needs
  description MEDIUMTEXT,
  additionalInfo TEXT,
  demoImage MEDIUMTEXT,
  PRIMARY KEY (activityID)
);

-- Create the "Tour_activity" table
DROP TABLE IF EXISTS Tour_activity;
CREATE TABLE IF NOT EXISTS Tour_activity (
  tourID INT NOT NULL,
  activityID INT NOT NULL,
  activityDate DATE,
  startTime INT,
  duration INT,
  PRIMARY KEY (tourID, activityID)
);


-- Add foreign keys to the tables

ALTER TABLE `Tour_accommodation` ADD FOREIGN KEY (`tourID`) REFERENCES `Tour` (`tourID`);

ALTER TABLE `Tour_accommodation` ADD FOREIGN KEY (`accomID`) REFERENCES `Accommodation` (`accomID`);

ALTER TABLE `Tour_transportation` ADD FOREIGN KEY (`tourID`) REFERENCES `Tour` (`tourID`);

ALTER TABLE `Tour_transportation` ADD FOREIGN KEY (`transID`) REFERENCES `Transportation` (`transID`);

ALTER TABLE `Tour_meal` ADD FOREIGN KEY (`tourID`) REFERENCES `Tour` (`tourID`);

ALTER TABLE `Tour_meal` ADD FOREIGN KEY (`restID`) REFERENCES `Restaurant` (`restID`);

ALTER TABLE `Tour_destinations` ADD FOREIGN KEY (`tourID`) REFERENCES `Tour` (`tourID`);

ALTER TABLE `Tour_destinations` ADD FOREIGN KEY (`destID`) REFERENCES `Destination` (`destID`);

ALTER TABLE `Tour_activity` ADD FOREIGN KEY (`tourID`) REFERENCES `Tour` (`tourID`);

ALTER TABLE `Tour_activity` ADD FOREIGN KEY (`activityID`) REFERENCES `Activity` (`activityID`);

ALTER TABLE `Destination` ADD FOREIGN KEY (`countryID`) REFERENCES `Country` (`countryID`);

ALTER TABLE `Activity` ADD FOREIGN KEY (`destID`) REFERENCES `Destination` (`destID`);

ALTER TABLE `Payment` ADD FOREIGN KEY (`customerID`) REFERENCES `Customer` (`accountID`);

ALTER TABLE `Payment` ADD FOREIGN KEY (`tourID`) REFERENCES `Tour` (`tourID`);

ALTER TABLE `Customer` ADD FOREIGN KEY (`accountID`) REFERENCES `Account` (`accountID`);

ALTER TABLE `Restaurant` ADD FOREIGN KEY (`destID`) REFERENCES `Destination` (`destID`);

ALTER TABLE `Transportation` ADD FOREIGN KEY (`startDestID`) REFERENCES `Destination` (`destID`);

ALTER TABLE `Transportation` ADD FOREIGN KEY (`endDestID`) REFERENCES `Destination` (`destID`);

ALTER TABLE `Accommodation` ADD FOREIGN KEY (`destID`) REFERENCES `Destination` (`destID`);