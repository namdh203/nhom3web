-- Create the database if it does not exist
DROP DATABASE Travelam;
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
  address TEXT, -- Adjust the size to your needs
  telephoneNo VARCHAR(15), -- Adjust the size to your needs
  description MEDIUMTEXT,
  additionalInfo TEXT,
  demoImage MEDIUMTEXT,
  PRIMARY KEY (restID)
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
  description MEDIUMTEXT,
  additionalInfo TEXT,
  demoImage MEDIUMTEXT,
  PRIMARY KEY (activityID)
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'user','hieunguyen@gmail.com','$2b$10$EvggYuv1mY.ER6JkRyjc9uz3x0koF8gE.g7dzhYoyTzFbPBQUD.H.','2023-12-12 04:27:54'),(2,'admin','hieutrung@gmail.com','$2b$10$NuEBH9YqBvBvJ6B8z4bUOuffgStNEik2g9jWMy/99s8lOfeusxzUu','2023-12-12 04:31:13');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

ALTER TABLE accommodation ADD CONSTRAINT `accommodation_ibfk_1` FOREIGN KEY (`destId`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE activity ADD  CONSTRAINT `activity_ibfk_1` FOREIGN KEY (`destId`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE customer ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE destination ADD CONSTRAINT `fk_orders_customers` FOREIGN KEY (`countryId`) REFERENCES `country` (`id`);
ALTER TABLE payment ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE restaurant ADD CONSTRAINT `restaurant_ibfk_1` FOREIGN KEY (`destId`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE tour_accom ADD CONSTRAINT `tour_accom_ibfk_1` FOREIGN KEY (`tourId`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE tour_accom ADD CONSTRAINT `tour_accom_ibfk_2` FOREIGN KEY (`accomId`) REFERENCES `accommodation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE tour_activity ADD CONSTRAINT `tour_activity_ibfk_1` FOREIGN KEY (`tourId`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE tour_activity ADD CONSTRAINT `tour_activity_ibfk_2` FOREIGN KEY (`activityId`) REFERENCES `activity` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE tour_dest ADD CONSTRAINT `tour_dest_ibfk_1` FOREIGN KEY (`tour_id`) REFERENCES `tour` (`id`);
ALTER TABLE tour_dest ADD CONSTRAINT `tour_dest_ibfk_2` FOREIGN KEY (`dest_id`) REFERENCES `destination` (`id`);
ALTER TABLE tour_meal ADD CONSTRAINT `tour_meal_ibfk_1` FOREIGN KEY (`tourId`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE tour_meal ADD CONSTRAINT `tour_meal_ibfk_2` FOREIGN KEY (`restId`) REFERENCES `restaurant` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE tour_trans ADD CONSTRAINT `tour_trans_ibfk_1` FOREIGN KEY (`tourId`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE tour_trans ADD CONSTRAINT `tour_trans_ibfk_2` FOREIGN KEY (`transId`) REFERENCES `transportation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Dump completed on 2023-12-12 12:11:26
