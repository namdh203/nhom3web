-- Create the database if it does not exist
DROP DATABASE Travelam;
CREATE DATABASE IF NOT EXISTS Travelam;

-- Use the database
USE Travelam;

-- Create the "Customer" table
DROP TABLE IF EXISTS `Customer`;
CREATE TABLE `Customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cardNo` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `passport` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Create the "Tour" table
DROP TABLE IF EXISTS Tour;
CREATE TABLE `Tour` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `duration` int NOT NULL,
  `price` double NOT NULL,
  `priceCurrency` varchar(255) DEFAULT 'USD',
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` varchar(255) NOT NULL,
  `voting` int NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Create the "Tour_dest" table
DROP TABLE IF EXISTS Tour_dest;
CREATE TABLE `Tour_dest` (
  `tourID` int NOT NULL,
  `destID` int NOT NULL,
  PRIMARY KEY (`tour_id`,`dest_id`),
  KEY `dest_id` (`dest_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Create the "Destination" table
DROP TABLE IF EXISTS Destination;
CREATE TABLE `Destination` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `countryID` int NOT NULL,
  `description` text NOT NULL,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `countryID` (`countryID`),
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Create the "Accommodation" table
DROP TABLE IF EXISTS Accommodation;
CREATE TABLE IF NOT EXISTS Accommodation (
  accomID INT NOT NULL,
  name VARCHAR(255), -- Adjust the size to your needs
  destID INT NOT NULL,
  pricePerNight DOUBLE,
  priceCurrency VARCHAR(255), -- Adjust the size to your needs
  address VARCHAR(255), -- Adjust the size to your needs
  telephoneNo VARCHAR(15), -- Adjust the size to your needs
  contactEmail VARCHAR(255), -- Adjust the size to your needs
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
  priceCurrency VARCHAR(255), -- Adjust the size to your needs
  type VARCHAR(255), -- Adjust the size to your needs
  demoImage TEXT,
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
CREATE TABLE `Country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `countryName` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- Create the "Restaurant" table
DROP TABLE IF EXISTS Restaurant;
CREATE TABLE IF NOT EXISTS Restaurant (
  restID INT NOT NULL,
  destID INT NOT NULL,
  name VARCHAR(255), -- Adjust the size to your needs
  address VARCHAR(255), -- Adjust the size to your needs
  telephoneNo VARCHAR(15), -- Adjust the size to your needs
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
  amount INT,
  currency VARCHAR(255), -- Adjust the size to your needs
  PRIMARY KEY (paymentID)
);

-- Create the "Activity" table
DROP TABLE IF EXISTS Activity;
CREATE TABLE IF NOT EXISTS Activity (
  activityID INT NOT NULL,
  name VARCHAR(50), -- Adjust the size to your needs
  destID INT NOT NULL,
  type VARCHAR(255), -- Adjust the size to your needs
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

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- Add foreign keys to the tables

ALTER TABLE `Tour_accommodation` ADD FOREIGN KEY (`tourID`) REFERENCES `Tour` (`tourID`);

ALTER TABLE `Tour_accommodation` ADD FOREIGN KEY (`accomID`) REFERENCES `Accommodation` (`accomID`);

ALTER TABLE `Tour_transportation` ADD FOREIGN KEY (`tourID`) REFERENCES `Tour` (`tourID`);

ALTER TABLE `Tour_transportation` ADD FOREIGN KEY (`transID`) REFERENCES `Transportation` (`transID`);

ALTER TABLE `Tour_meal` ADD FOREIGN KEY (`tourID`) REFERENCES `Tour` (`tourID`);

ALTER TABLE `Tour_meal` ADD FOREIGN KEY (`restID`) REFERENCES `Restaurant` (`restID`);

ALTER TABLE `Tour_dest` ADD FOREIGN KEY (`tourID`) REFERENCES `Tour` (`tourID`);

ALTER TABLE `Tour_dest` ADD FOREIGN KEY (`destID`) REFERENCES `Destination` (`destID`);

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