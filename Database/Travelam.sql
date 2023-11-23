-- Create the database if it does not exist
CREATE DATABASE IF NOT EXISTS Travelam;

-- Use the database
USE Travelam;

-- Create the "Customer" table
DROP TABLE IF EXISTS customer;
CREATE TABLE IF NOT EXISTS customer (
  user_id INT NOT NULL,
  name VARCHAR(255),
  cardNo VARCHAR(16),
  address VARCHAR(255),
  phoneNumber VARCHAR(15),
  email VARCHAR(255),
  passport VARCHAR(15),
  PRIMARY KEY (id)
);

-- Create the "Tour" table
DROP TABLE IF EXISTS tour;
CREATE TABLE IF NOT EXISTS tour (
  id INT NOT NULL,
  title VARCHAR(50),
  description TEXT, -- Adjust the size to your needs
  duration INT,
  price DOUBLE,
  priceCurrency VARCHAR(255), -- Adjust the size to your needs
  startDate DATE,
  endDate DATE,
  additionInfo VARCHAR(255),
  demoImage VARCHAR(255),
  voting INT,
  type VARCHAR(255),
  PRIMARY KEY (id)
);

-- Create the "Tour_destinations" table
DROP TABLE IF EXISTS tour_dest;
CREATE TABLE IF NOT EXISTS tour_dest (
  tour_id INT NOT NULL,
  dest_id INT NOT NULL,
  PRIMARY KEY (tour_id, dest_id)
);

-- Create the "Destination" table
DROP TABLE IF EXISTS destination;
CREATE TABLE IF NOT EXISTS destination (
  id INT NOT NULL,
  name VARCHAR(255), -- Adjust the size to your needs
  country_id INT NOT NULL,
  description TEXT, -- Adjust the size to your needs
  additionInfo VARCHAR(255),
  demoImage VARCHAR(255),
  PRIMARY KEY (id)
);

-- Create the "Accommodation" table
DROP TABLE IF EXISTS accommodation;
CREATE TABLE IF NOT EXISTS accommodation (
  id INT NOT NULL,
  name VARCHAR(255), -- Adjust the size to your needs
  dest_id INT NOT NULL,
  pricePerNight DOUBLE,
  priceCurrency VARCHAR(255), -- Adjust the size to your needs
  address VARCHAR(255), -- Adjust the size to your needs
  telephone VARCHAR(15), -- Adjust the size to your needs
  contactEmail VARCHAR(255), -- Adjust the size to your needs
  additionInfo VARCHAR(255), -- Adjust the size to your
  demoImage VARCHAR(255), -- Adjust the size to your needs
  PRIMARY KEY (id)
);

-- Create the "Tour_accommodation" table
DROP TABLE IF EXISTS tour_accom;
CREATE TABLE IF NOT EXISTS tour_accom (
  tour_id INT NOT NULL,
  accom_id INT NOT NULL,
  roomNum INT,
  PRIMARY KEY (tour_id, accom_id)
);

-- Create the "Transportation" table
DROP TABLE IF EXISTS transportation;
CREATE TABLE IF NOT EXISTS transportation (
  id INT NOT NULL,
  startDest_id INT NOT NULL,
  endDest_id INT NOT NULL,
  startTime DATE,
  endTime DATE,
  price DOUBLE,
  priceCurrency VARCHAR(255), -- Adjust the size to your needs
  type VARCHAR(255), -- Adjust the size to your needs
  additionInfo VARCHAR(255),
  demoImage VARCHAR(255),
  PRIMARY KEY (id)
);

-- Create the "Tour_transportation" table
DROP TABLE IF EXISTS tour_trans;
CREATE TABLE IF NOT EXISTS tour_trans (
  tour_id INT NOT NULL,
  trans_id INT NOT NULL,
  PRIMARY KEY (tour_id, trans_id)
);

-- Create the "Account" table
DROP TABLE IF EXISTS user;
CREATE TABLE IF NOT EXISTS user (
  id INT NOT NULL,
  role VARCHAR(255), -- Adjust the size to your needs
  email VARCHAR(255), -- Adjust the size to your needs
  password VARCHAR(255), -- Adjust the size to your needs
  created DATE,
  PRIMARY KEY (id)
);

-- Create the "Country" table
DROP TABLE IF EXISTS country;
CREATE TABLE IF NOT EXISTS country (
  id INT NOT NULL,
  countryName VARCHAR(255), -- Adjust the size to your needs
  description TEXT,
  additionInfo VARCHAR(255),
  demoImage VARCHAR(255),
  PRIMARY KEY (id)
);

-- Create the "Restaurant" table
DROP TABLE IF EXISTS restaurant;
CREATE TABLE IF NOT EXISTS restaurant (
  id INT NOT NULL,
  dest_id INT NOT NULL,
  name VARCHAR(255), -- Adjust the size to your needs
  address VARCHAR(255), -- Adjust the size to your needs
  telephone VARCHAR(15), -- Adjust the size to your needs
  additionInfo VARCHAR(255),
  demoImage VARCHAR(255),
  PRIMARY KEY (id)
);

-- Create the "Tour_meal" table
DROP TABLE IF EXISTS tour_meal;
CREATE TABLE IF NOT EXISTS tour_meal (
  tour_id INT NOT NULL,
  rest_id INT NOT NULL,
  timeSuggest DATE,
  PRIMARY KEY (tour_id, rest_id)
);

-- Create the "Payment" table
DROP TABLE IF EXISTS payment;
CREATE TABLE IF NOT EXISTS payment (
  id INT NOT NULL,
  user_id INT NOT NULL,
  tour_id INT NOT NULL,
  payDate DATE,
  amount INT,
  currency VARCHAR(255), -- Adjust the size to your needs
  PRIMARY KEY (id)
);

-- Create the "Activity" table
DROP TABLE IF EXISTS activity;
CREATE TABLE IF NOT EXISTS activity (
  id INT NOT NULL,
  name VARCHAR(50), -- Adjust the size to your needs
  dest_id INT NOT NULL,
  type VARCHAR(255), -- Adjust the size to your needs
  additionInfo VARCHAR(255),
  demoImage VARCHAR(255),
  PRIMARY KEY (id)
);

-- Create the "Tour_activity" table
DROP TABLE IF EXISTS tour_activity;
CREATE TABLE IF NOT EXISTS tour_activity (
  tour_id INT NOT NULL,
  activity_id INT NOT NULL,
  startDate DATE,
  duration INT,
  PRIMARY KEY (tour_id, activity_id)
);


-- Add foreign keys to the tables

ALTER TABLE `Tour_accommodation` ADD FOREIGN KEY (`tour_id`) REFERENCES `tour` (`id`);

ALTER TABLE `Tour_accommodation` ADD FOREIGN KEY (`accom_id`) REFERENCES `accommodation` (`id`);

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