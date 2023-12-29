-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: travelgiang
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.22.04.1

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
-- Table structure for table `country_monthly_advice`
--

DROP TABLE IF EXISTS `country_monthly_advice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country_monthly_advice` (
  `countryId` int NOT NULL,
  `month` tinyint NOT NULL,
  `adviceCode` tinyint NOT NULL,
  `lowTemp` tinyint NOT NULL,
  `highTemp` tinyint NOT NULL,
  PRIMARY KEY (`countryId`,`month`),
  CONSTRAINT `countryId` FOREIGN KEY (`countryId`) REFERENCES `country` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country_monthly_advice`
--

LOCK TABLES `country_monthly_advice` WRITE;
/*!40000 ALTER TABLE `country_monthly_advice` DISABLE KEYS */;
INSERT INTO `country_monthly_advice` VALUES (1,1,1,1,11),(1,2,1,1,11),(1,3,2,4,13),(1,4,2,18,21),(1,5,2,14,24),(1,6,3,18,27),(1,7,3,21,30),(1,8,3,22,32),(1,9,1,20,29),(2,1,1,4,10),(2,2,1,2,9),(2,3,2,5,11),(2,4,3,11,24),(2,5,3,14,21),(2,6,1,19,25),(2,7,0,23,29),(2,8,0,25,32),(2,9,0,24,31),(3,1,3,19,29),(3,2,2,20,30),(3,3,1,19,29),(3,4,1,17,27),(3,5,2,13,23),(3,6,0,10,20),(3,7,0,9,18),(3,8,0,8,18),(3,9,2,9,19),(4,1,3,24,31),(4,2,1,25,31),(4,3,2,26,33),(4,4,1,27,30),(4,5,2,26,32),(4,6,2,25,32),(4,7,0,25,32),(4,8,0,25,31),(4,9,1,25,31),(5,1,3,17,25),(5,2,3,18,26),(5,3,1,17,25),(5,4,1,16,23),(5,5,0,13,21),(5,6,1,11,19),(5,7,0,10,18),(5,8,1,9,18),(5,9,2,10,18),(6,1,1,6,14),(6,2,1,5,13),(6,3,1,7,15),(6,4,2,12,15),(6,5,2,12,20),(6,6,3,16,24),(6,7,3,19,27),(6,8,3,21,29),(6,9,2,19,27),(7,1,3,24,31),(7,2,1,25,31),(7,3,2,26,33),(7,4,1,27,30),(7,5,2,26,32),(7,6,2,25,32),(7,7,0,25,32),(7,8,0,25,31),(7,9,1,25,31),(8,1,0,1,6),(8,2,0,2,7),(8,3,1,4,9),(8,4,1,3,8),(8,5,1,9,14),(8,6,3,12,17),(8,7,3,15,20),(8,8,3,16,21),(8,9,2,14,19),(9,1,3,-8,2),(9,2,3,-7,3),(9,3,3,-1,8),(9,4,2,12,23),(9,5,2,14,23),(9,6,1,19,28),(9,7,1,2,31),(9,8,1,22,31),(9,9,3,19,28),(10,1,3,24,31),(10,2,1,25,31),(10,3,2,26,33),(10,4,1,27,30),(10,5,2,26,32),(10,6,2,25,32),(10,7,0,25,32),(10,8,0,25,31),(10,9,1,25,31);
/*!40000 ALTER TABLE `country_monthly_advice` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-29 23:53:25
