DROP DATABASE Travelam;
CREATE DATABASE Travelam;
USE Travelam;

DROP TABLE IF EXISTS `accommodation`;
DROP TABLE IF EXISTS `activity`;
DROP TABLE IF EXISTS `country`;
DROP TABLE IF EXISTS `customer`;
DROP TABLE IF EXISTS `destination`;
DROP TABLE IF EXISTS `payment`;
DROP TABLE IF EXISTS `restaurant`;
DROP TABLE IF EXISTS `tour`;
DROP TABLE IF EXISTS `tour_accom`;
DROP TABLE IF EXISTS `tour_activity`;
DROP TABLE IF EXISTS `tour_dest`;
DROP TABLE IF EXISTS `tour_meal`;
DROP TABLE IF EXISTS `tour_trans`;
DROP TABLE IF EXISTS `transportation`;
DROP TABLE IF EXISTS `user`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE `destination` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `countryId` int NOT NULL,
  `description` text NOT NULL,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` MEDIUMTEXT DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `countryId` (`countryId`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `accommodation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `destId` int NOT NULL,
  `pricePerNight` double NOT NULL,
  `priceCurrency` varchar(255) DEFAULT 'USD',
  `address` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `contactEmail` varchar(255) NOT NULL,
  `description` MEDIUMTEXT DEFAULT '',
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` MEDIUMTEXT DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `destId` (`destId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `activity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `destId` int NOT NULL,
  `type` varchar(255) NOT NULL,
  `description` MEDIUMTEXT,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` MEDIUMTEXT DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `destId` (`destId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `countryName` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `tourId` int NOT NULL,
  `payDate` datetime NOT NULL,
  `amount` double NOT NULL,
  `currency` varchar(255) DEFAULT 'USD',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `restaurant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `destId` int NOT NULL,
  `address` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `description` MEDIUMTEXT,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` MEDIUMTEXT DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `destId` (`destId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `demoImage` MEDIUMTEXT NOT NULL,
  `voting` int NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=160 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `tour_accom` (
  `tourId` int NOT NULL,
  `accomId` int NOT NULL,
  `roomNum` int NOT NULL,
  PRIMARY KEY (`tourId`,`accomId`),
  KEY `accomId` (`accomId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `tour_activity` (
  `tourId` int NOT NULL,
  `activityId` int NOT NULL,
  `startDate` datetime NOT NULL,
  `duration` int NOT NULL,
  PRIMARY KEY (`tourId`,`activityId`),
  KEY `activityId` (`activityId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `tour_dest` (
  `tourId` int NOT NULL,
  `destId` int NOT NULL,
  PRIMARY KEY (`tourId`,`destId`),
  KEY `destId` (`destId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `tour_meal` (
  `tourId` int NOT NULL,
  `restId` int NOT NULL,
  `timeSuggest` datetime NOT NULL,
  PRIMARY KEY (`tourId`,`restId`),
  KEY `restId` (`restId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `tour_trans` (
  `tourId` int NOT NULL,
  `transId` int NOT NULL,
  `startDestId` int NOT NULL,
  `endDestId` int NOT NULL,
  `startTime` datetime NOT NULL,
  `endTime` datetime NOT NULL,
  `price` double NOT NULL,
  `priceCurrency` varchar(255) DEFAULT 'USD',
  PRIMARY KEY (`tourId`,`transId`),
  KEY `transId` (`transId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `transportation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `additionInfo` varchar(255) NOT NULL,
  `demoImage` MEDIUMTEXT DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `accommodation` ADD CONSTRAINT `accommodation_ibfk_1` FOREIGN KEY (`destId`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `activity` ADD CONSTRAINT `activity_ibfk_1` FOREIGN KEY (`destId`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `payment` ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `restaurant` ADD CONSTRAINT `restaurant_ibfk_1` FOREIGN KEY (`destId`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `tour_accom` ADD CONSTRAINT `tour_accom_ibfk_1` FOREIGN KEY (`tourId`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `tour_accom` ADD CONSTRAINT `tour_accom_ibfk_2` FOREIGN KEY (`accomId`) REFERENCES `accommodation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `tour_activity` ADD CONSTRAINT `tour_activity_ibfk_1` FOREIGN KEY (`tourId`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `tour_activity` ADD CONSTRAINT `tour_activity_ibfk_2` FOREIGN KEY (`activityId`) REFERENCES `activity` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `tour_dest` ADD CONSTRAINT `tour_dest_ibfk_1` FOREIGN KEY (`tourId`) REFERENCES `tour` (`id`);
ALTER TABLE `tour_dest` ADD CONSTRAINT `tour_dest_ibfk_2` FOREIGN KEY (`destId`) REFERENCES `destination` (`id`);
ALTER TABLE `tour_meal` ADD CONSTRAINT `tour_meal_ibfk_1` FOREIGN KEY (`tourId`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `tour_meal` ADD CONSTRAINT `tour_meal_ibfk_2` FOREIGN KEY (`restId`) REFERENCES `restaurant` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `tour_trans` ADD CONSTRAINT `tour_trans_ibfk_1` FOREIGN KEY (`tourId`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `tour_trans` ADD CONSTRAINT `tour_trans_ibfk_2` FOREIGN KEY (`transId`) REFERENCES `transportation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET character_set_client = @saved_cs_client */;
