-- Create the database if it does not exist
DROP DATABASE Travelam;
CREATE DATABASE IF NOT EXISTS Travelam;

-- Use the database
USE Travelam;

-- Create the "Customer" table
<<<<<<< HEAD
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
=======
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
>>>>>>> bd3529af8e4f708c12dbed2cdd0fa27e330ebbc1

-- Create the "Accommodation" table
DROP TABLE IF EXISTS accommodation;
CREATE TABLE IF NOT EXISTS accommodation (
  id INT NOT NULL,
  name VARCHAR(255), -- Adjust the size to your needs
  dest_id INT NOT NULL,
  pricePerNight DOUBLE,
<<<<<<< HEAD
  priceCurrency VARCHAR(10), -- Adjust the size to your needs
  address TEXT, -- Adjust the size to your needs
  telephoneNo VARCHAR(15), -- Adjust the size to your needs
  contactEmail VARCHAR(255), -- Adjust the size to your needs
  description MEDIUMTEXT,
  additionalInfo TEXT,
  demoImage MEDIUMTEXT,
  PRIMARY KEY (accomID)
=======
  priceCurrency VARCHAR(255), -- Adjust the size to your needs
  address VARCHAR(255), -- Adjust the size to your needs
  telephone VARCHAR(15), -- Adjust the size to your needs
  contactEmail VARCHAR(255), -- Adjust the size to your needs
  additionInfo VARCHAR(255), -- Adjust the size to your
  demoImage VARCHAR(255), -- Adjust the size to your needs
  PRIMARY KEY (id)
>>>>>>> bd3529af8e4f708c12dbed2cdd0fa27e330ebbc1
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
<<<<<<< HEAD
  additionInfo VARCHAR(255),
  demoImage VARCHAR(255),
  PRIMARY KEY (id)
=======
>>>>>>> bd3529af8e4f708c12dbed2cdd0fa27e330ebbc1
  demoImage TEXT,
  PRIMARY KEY (transID)
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
<<<<<<< HEAD
DROP TABLE IF EXISTS country;
CREATE TABLE IF NOT EXISTS country (
  id INT NOT NULL,
  countryName VARCHAR(255), -- Adjust the size to your needs
  description TEXT,
  additionInfo VARCHAR(255),
  demoImage VARCHAR(255),
  PRIMARY KEY (id)
);
=======
DROP TABLE IF EXISTS Country;
CREATE TABLE `Country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `countryName` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

>>>>>>> bd3529af8e4f708c12dbed2cdd0fa27e330ebbc1

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
<<<<<<< HEAD
  address TEXT, -- Adjust the size to your needs
  telephoneNo VARCHAR(15), -- Adjust the size to your needs
  description MEDIUMTEXT,
  additionalInfo TEXT,
  demoImage MEDIUMTEXT,
  PRIMARY KEY (restID)
=======
>>>>>>> bd3529af8e4f708c12dbed2cdd0fa27e330ebbc1
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
<<<<<<< HEAD
  description MEDIUMTEXT,
  additionalInfo TEXT,
  demoImage MEDIUMTEXT,
  PRIMARY KEY (activityID)
=======
  additionInfo VARCHAR(255),
  demoImage VARCHAR(255),
  PRIMARY KEY (id)
>>>>>>> bd3529af8e4f708c12dbed2cdd0fa27e330ebbc1
);

-- Create the "Tour_activity" table
DROP TABLE IF EXISTS tour_activity;
CREATE TABLE IF NOT EXISTS tour_activity (
  tour_id INT NOT NULL,
  activity_id INT NOT NULL,
  startDate DATE,
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

ALTER TABLE `Tour_accommodation` ADD FOREIGN KEY (`tour_id`) REFERENCES `tour` (`id`);

ALTER TABLE `Tour_accommodation` ADD FOREIGN KEY (`accom_id`) REFERENCES `accommodation` (`id`);

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