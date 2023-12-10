-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: travelhieu
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accommodation`
--

DROP TABLE IF EXISTS `accommodation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accommodation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `destId` int NOT NULL,
  `pricePerNight` double NOT NULL,
  `priceCurrency` varchar(255) DEFAULT 'USD',
  `address` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `contactEmail` varchar(255) NOT NULL,
  `description` text,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` text,
  PRIMARY KEY (`id`),
  KEY `destId` (`destId`),
  CONSTRAINT `accommodation_ibfk_1` FOREIGN KEY (`destId`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `activity`
--

DROP TABLE IF EXISTS `activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `destId` int NOT NULL,
  `type` varchar(255) NOT NULL,
  `description` text,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` text,
  PRIMARY KEY (`id`),
  KEY `destId` (`destId`),
  CONSTRAINT `activity_ibfk_1` FOREIGN KEY (`destId`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `countryName` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cardNo` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `passport` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `destination`
--

DROP TABLE IF EXISTS `destination`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `destination` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `countryId` int DEFAULT NULL,
  `description` text NOT NULL,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `country_id` (`countryId`),
  CONSTRAINT `fk_orders_customers` FOREIGN KEY (`countryId`) REFERENCES `country` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `tour_id` int NOT NULL,
  `payDate` datetime NOT NULL,
  `amount` double NOT NULL,
  `currency` varchar(255) DEFAULT 'USD',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `destId` int NOT NULL,
  `address` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` text,
  PRIMARY KEY (`id`),
  KEY `destId` (`destId`),
  CONSTRAINT `restaurant_ibfk_1` FOREIGN KEY (`destId`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tour`
--

DROP TABLE IF EXISTS `tour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tour` (
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
) ENGINE=InnoDB AUTO_INCREMENT=160 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tour_accom`
--

DROP TABLE IF EXISTS `tour_accom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tour_accom` (
  `tourId` int NOT NULL,
  `accomId` int NOT NULL,
  `roomNum` int NOT NULL,
  PRIMARY KEY (`tourId`,`accomId`),
  KEY `accomId` (`accomId`),
  CONSTRAINT `tour_accom_ibfk_1` FOREIGN KEY (`tourId`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tour_accom_ibfk_2` FOREIGN KEY (`accomId`) REFERENCES `accommodation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tour_activity`
--

DROP TABLE IF EXISTS `tour_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tour_activity` (
  `tourId` int NOT NULL,
  `activityId` int NOT NULL,
  `startDate` datetime NOT NULL,
  `duration` int NOT NULL,
  PRIMARY KEY (`tourId`,`activityId`),
  KEY `activityId` (`activityId`),
  CONSTRAINT `tour_activity_ibfk_1` FOREIGN KEY (`tourId`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tour_activity_ibfk_2` FOREIGN KEY (`activityId`) REFERENCES `activity` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tour_dest`
--

DROP TABLE IF EXISTS `tour_dest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tour_dest` (
  `tour_id` int NOT NULL,
  `dest_id` int NOT NULL,
  PRIMARY KEY (`tour_id`,`dest_id`),
  KEY `dest_id` (`dest_id`),
  CONSTRAINT `tour_dest_ibfk_1` FOREIGN KEY (`tour_id`) REFERENCES `tour` (`id`),
  CONSTRAINT `tour_dest_ibfk_2` FOREIGN KEY (`dest_id`) REFERENCES `destination` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tour_meal`
--

DROP TABLE IF EXISTS `tour_meal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tour_meal` (
  `tourId` int NOT NULL,
  `restId` int NOT NULL,
  `timeSuggest` datetime NOT NULL,
  PRIMARY KEY (`tourId`,`restId`),
  KEY `restId` (`restId`),
  CONSTRAINT `tour_meal_ibfk_1` FOREIGN KEY (`tourId`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tour_meal_ibfk_2` FOREIGN KEY (`restId`) REFERENCES `restaurant` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tour_trans`
--

DROP TABLE IF EXISTS `tour_trans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tour_trans` (
  `tourId` int NOT NULL,
  `transId` int NOT NULL,
  PRIMARY KEY (`tourId`,`transId`),
  KEY `transId` (`transId`),
  CONSTRAINT `tour_trans_ibfk_1` FOREIGN KEY (`tourId`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tour_trans_ibfk_2` FOREIGN KEY (`transId`) REFERENCES `transportation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `transportation`
--

DROP TABLE IF EXISTS `transportation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transportation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `startDestId` int NOT NULL,
  `endDestId` int NOT NULL,
  `startTime` datetime NOT NULL,
  `endTime` datetime NOT NULL,
  `price` double NOT NULL,
  `priceCurrency` varchar(255) DEFAULT 'USD',
  `type` varchar(255) NOT NULL,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `startDestId` (`startDestId`),
  KEY `endDestId` (`endDestId`),
  CONSTRAINT `transportation_ibfk_1` FOREIGN KEY (`startDestId`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `transportation_ibfk_2` FOREIGN KEY (`endDestId`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-10 21:08:22
