-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: travelam
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
  `name` int NOT NULL,
  `dest_id` int NOT NULL,
  `pricePerNight` double NOT NULL,
  `priceCurrency` varchar(255) DEFAULT 'USD',
  `address` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `contactEmail` varchar(255) NOT NULL,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `dest_id` (`dest_id`),
  CONSTRAINT `accommodation_ibfk_1` FOREIGN KEY (`dest_id`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
  `dest_id` int NOT NULL,
  `type` varchar(255) NOT NULL,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `dest_id` (`dest_id`),
  CONSTRAINT `activity_ibfk_1` FOREIGN KEY (`dest_id`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cardNo` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `passport` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
  `country_id` int NOT NULL,
  `description` text NOT NULL,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `country_id` (`country_id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
  `dest_id` int NOT NULL,
  `address` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `dest_id` (`dest_id`),
  CONSTRAINT `restaurant_ibfk_1` FOREIGN KEY (`dest_id`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
) ENGINE=InnoDB AUTO_INCREMENT=160 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tour_accom`
--

DROP TABLE IF EXISTS `tour_accom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tour_accom` (
  `tour_id` int NOT NULL,
  `accom_id` int NOT NULL,
  `roomNum` int NOT NULL,
  PRIMARY KEY (`tour_id`,`accom_id`),
  KEY `accom_id` (`accom_id`),
  CONSTRAINT `tour_accom_ibfk_1` FOREIGN KEY (`tour_id`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tour_accom_ibfk_2` FOREIGN KEY (`accom_id`) REFERENCES `accommodation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tour_activity`
--

DROP TABLE IF EXISTS `tour_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tour_activity` (
  `tour_id` int NOT NULL,
  `activity_id` int NOT NULL,
  `startDate` datetime NOT NULL,
  `duration` int NOT NULL,
  PRIMARY KEY (`tour_id`,`activity_id`),
  KEY `activity_id` (`activity_id`),
  CONSTRAINT `tour_activity_ibfk_1` FOREIGN KEY (`tour_id`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tour_activity_ibfk_2` FOREIGN KEY (`activity_id`) REFERENCES `activity` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tour_meal`
--

DROP TABLE IF EXISTS `tour_meal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tour_meal` (
  `tour_id` int NOT NULL,
  `rest_id` int NOT NULL,
  `timeSuggest` datetime NOT NULL,
  PRIMARY KEY (`tour_id`,`rest_id`),
  KEY `rest_id` (`rest_id`),
  CONSTRAINT `tour_meal_ibfk_1` FOREIGN KEY (`tour_id`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tour_meal_ibfk_2` FOREIGN KEY (`rest_id`) REFERENCES `restaurant` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tour_trans`
--

DROP TABLE IF EXISTS `tour_trans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tour_trans` (
  `tour_id` int NOT NULL,
  `trans_id` int NOT NULL,
  PRIMARY KEY (`tour_id`,`trans_id`),
  KEY `trans_id` (`trans_id`),
  CONSTRAINT `tour_trans_ibfk_1` FOREIGN KEY (`tour_id`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tour_trans_ibfk_2` FOREIGN KEY (`trans_id`) REFERENCES `transportation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `transportation`
--

DROP TABLE IF EXISTS `transportation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transportation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `startDest_id` int NOT NULL,
  `endDest_id` int NOT NULL,
  `startTime` datetime NOT NULL,
  `endTime` datetime NOT NULL,
  `price` double NOT NULL,
  `priceCurrency` varchar(255) DEFAULT 'USD',
  `type` varchar(255) NOT NULL,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `startDest_id` (`startDest_id`),
  KEY `endDest_id` (`endDest_id`),
  CONSTRAINT `transportation_ibfk_1` FOREIGN KEY (`startDest_id`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `transportation_ibfk_2` FOREIGN KEY (`endDest_id`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-23 18:12:15