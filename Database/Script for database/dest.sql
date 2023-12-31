DELETE FROM `dest_accom`;
INSERT INTO `dest_accom` (`destId`, `accomId`) VALUES
(1, 3), (1, 5), (1, 10), (1, 20),
(2, 7), (2, 15), (2, 25), (2, 35),
(3, 1), (3, 8), (3, 18), (3, 30),
(4, 5), (4, 8), (4, 15), (4, 30),
(5, 2), (5, 12), (5, 22), (5, 42),
(6, 1), (6, 7), (6, 18), (6, 35),
(7, 3), (7, 10), (7, 20), (7, 40),
(8, 4), (8, 14), (8, 28), (8, 38),
(9, 6), (9, 16), (9, 26), (9, 36),
(10, 11), (10, 21), (10, 31), (10, 41),
(11, 1), (11, 9), (11, 19), (11, 29),
(12, 2), (12, 12), (12, 22), (12, 32),
(13, 3), (13, 13), (13, 23), (13, 33),
(14, 4), (14, 14), (14, 24), (14, 34),
(15, 5), (15, 15), (15, 25), (15, 35),
(16, 6), (16, 16), (16, 26), (16, 36),
(17, 7), (17, 17), (17, 27), (17, 37),
(18, 8), (18, 18), (18, 28), (18, 38),
(19, 10), (19, 20), (19, 30), (19, 40),
(20, 11), (20, 21), (20, 31), (20, 41),
(21, 2), (21, 12), (21, 22), (21, 32),
(22, 3), (22, 13), (22, 23), (22, 33),
(23, 4), (23, 14), (23, 24), (23, 34),
(24, 5), (24, 15), (24, 25), (24, 35),
(25, 6), (25, 16), (25, 26), (25, 36),
(26, 7), (26, 17), (26, 27), (26, 37),
(27, 8), (27, 18), (27, 28), (27, 38),
(28, 9), (28, 19), (28, 29), (28, 39),
(29, 10), (29, 20), (29, 30), (29, 40),
(30, 11), (30, 21), (30, 31), (30, 41),
(31, 1), (31, 9), (31, 19), (31, 29),
(32, 2), (32, 12), (32, 22), (32, 32),
(33, 3), (33, 13), (33, 23), (33, 33),
(34, 4), (34, 14), (34, 24), (34, 34),
(35, 5), (35, 15), (35, 25), (35, 35),
(36, 6), (36, 16), (36, 26), (36, 36),
(37, 7), (37, 17), (37, 27), (37, 37),
(38, 8), (38, 18), (38, 28), (38, 38),
(39, 10), (39, 20), (39, 30), (39, 40),
(40, 11), (40, 21), (40, 31), (40, 41),
(41, 1), (41, 9), (41, 19), (41, 29),
(42, 2), (42, 12), (42, 22), (42, 32),
(43, 3), (43, 13), (43, 23), (43, 33),
(44, 4), (44, 14), (44, 24), (44, 34),
(45, 5), (45, 15), (45, 25), (45, 35),
(46, 6), (46, 16), (46, 26), (46, 36),
(47, 7), (47, 17), (47, 27), (47, 37),
(48, 8), (48, 18), (48, 28), (48, 38),
(49, 10), (49, 20), (49, 30), (49, 40),
(50, 11), (50, 21), (50, 31), (50, 41);

DELETE FROM `dest_activity`;

INSERT INTO `dest_activity` (`destId`, `activityId`) VALUES
(1, 3), (1, 5), (1, 10), (1, 11),
(2, 7), (2, 12), (2, 6), (2, 3),
(3, 1), (3, 8), (3, 11), (3, 12),
(4, 5), (4, 8), (4, 13), (4, 10),
(5, 2), (5, 12), (5, 9), (5, 11),
(6, 1), (6, 7), (6, 10), (6, 13),
(7, 3), (7, 10), (7, 13), (7, 5),
(8, 4), (8, 7), (8, 8), (8, 12),
(9, 6), (9, 9), (9, 11), (9, 1),
(10, 11), (10, 5), (10, 1), (10, 13),
(11, 1), (11, 9), (11, 13), (11, 6),
(12, 2), (12, 12), (12, 3), (12, 10),
(13, 3), (13, 13), (13, 10), (13, 7),
(14, 4), (14, 1), (14, 7), (14, 11),
(15, 5), (15, 8), (15, 9), (15, 12),
(16, 6), (16, 9), (16, 11), (16, 2),
(17, 7), (17, 13), (17, 8), (17, 1),
(18, 8), (18, 1), (18, 12), (18, 3),
(19, 10), (19, 11), (19, 13), (19, 5),
(20, 11), (20, 1), (20, 10), (20, 8),
(21, 2), (21, 12), (21, 6), (21, 10),
(22, 3), (22, 13), (22, 10), (22, 5),
(23, 4), (23, 6), (23, 7), (23, 11),
(24, 5), (24, 8), (24, 9), (24, 12),
(25, 6), (25, 9), (25, 11), (25, 2),
(26, 7), (26, 13), (26, 8), (26, 1),
(27, 8), (27, 1), (27, 12), (27, 3),
(28, 9), (28, 1), (28, 12), (28, 6),
(29, 10), (29, 1), (29, 13), (29, 5),
(30, 11), (30, 1), (30, 10), (30, 4),
(31, 1), (31, 9), (31, 13), (31, 11),
(32, 2), (32, 12), (32, 3), (32, 10),
(33, 3), (33, 13), (33, 10), (33, 7),
(34, 4), (34, 1), (34, 7), (34, 11),
(35, 5), (35, 8), (35, 9), (35, 12),
(36, 6), (36, 9), (36, 11), (36, 2),
(37, 7), (37, 13), (37, 8), (37, 1),
(38, 8), (38, 1), (38, 12), (38, 3),
(39, 10), (39, 11), (39, 13), (39, 5),
(40, 11), (40, 1), (40, 10), (40, 6),
(41, 1), (41, 9), (41, 13), (41, 11),
(42, 2), (42, 12), (42, 3), (42, 10),
(43, 3), (43, 13), (43, 10), (43, 7),
(44, 4), (44, 1), (44, 7), (44, 11),
(45, 5), (45, 8), (45, 9), (45, 12),
(46, 6), (46, 9), (46, 11), (46, 2),
(47, 7), (47, 13), (47, 8), (47, 1),
(48, 8), (48, 1), (48, 12), (48, 3),
(49, 10), (49, 11), (49, 13), (49, 5),
(50, 11), (50, 1), (50, 10), (50, 6);

DELETE FROM `dest_restaurant`;

INSERT INTO `dest_restaurant` (`destId`, `restId`) VALUES
(1, 3), (1, 5), (1, 6), (1, 7),
(2, 2), (2, 8), (2, 6), (2, 3),
(3, 1), (3, 4), (3, 9), (3, 5),
(4, 5), (4, 8), (4, 3), (4, 9),
(5, 2), (5, 6), (5, 9), (5, 7),
(6, 1), (6, 7), (6, 4), (6, 8),
(7, 3), (7, 7), (7, 5), (7, 1),
(8, 4), (8, 8), (8, 6), (8, 2),
(9, 6), (9, 9), (9, 5), (9, 3),
(10, 1), (10, 3), (10, 9), (10, 2),
(11, 1), (11, 5), (11, 6), (11, 7),
(12, 2), (12, 7), (12, 4), (12, 6),
(13, 3), (13, 8), (13, 5), (13, 9),
(14, 4), (14, 6), (14, 3), (14, 8),
(15, 5), (15, 9), (15, 7), (15, 2),
(16, 6), (16, 3), (16, 9), (16, 1),
(17, 7), (17, 4), (17, 8), (17, 2),
(18, 8), (18, 6), (18, 3), (18, 9),
(19, 1), (19, 5), (19, 7), (19, 2),
(20, 1), (20, 6), (20, 8), (20, 3),
(21, 2), (21, 8), (21, 6), (21, 3),
(22, 3), (22, 9), (22, 5), (22, 7),
(23, 4), (23, 8), (23, 3), (23, 9),
(24, 5), (24, 6), (24, 7), (24, 2),
(25, 6), (25, 3), (25, 9), (25, 1),
(26, 7), (26, 4), (26, 6), (26, 2),
(27, 8), (27, 6), (27, 3), (27, 9),
(28, 9), (28, 4), (28, 8), (28, 2),
(29, 1), (29, 5), (29, 7), (29, 2),
(30, 1), (30, 6), (30, 4), (30, 3),
(31, 1), (31, 5), (31, 6), (31, 7),
(32, 2), (32, 7), (32, 4), (32, 6),
(33, 3), (33, 8), (33, 5), (33, 9),
(34, 4), (34, 6), (34, 3), (34, 8),
(35, 5), (35, 9), (35, 7), (35, 2),
(36, 6), (36, 3), (36, 9), (36, 1),
(37, 7), (37, 4), (37, 8), (37, 2),
(38, 8), (38, 6), (38, 3), (38, 9),
(39, 1), (39, 5), (39, 7), (39, 2),
(40, 1), (40, 6), (40, 5), (40, 3),
(41, 1), (41, 5), (41, 6), (41, 7),
(42, 2), (42, 7), (42, 4), (42, 6),
(43, 3), (43, 8), (43, 5), (43, 9),
(44, 4), (44, 6), (44, 3), (44, 8),
(45, 5), (45, 9), (45, 7), (45, 2),
(46, 6), (46, 3), (46, 9), (46, 1),
(47, 7), (47, 4), (47, 8), (47, 2),
(48, 8), (48, 6), (48, 3), (48, 9),
(49, 1), (49, 5), (49, 7), (49, 2),
(50, 1), (50, 6), (50, 9), (50, 3);

DELETE FROM `dest_trans`;

INSERT INTO `dest_trans` (`destId`, `transId`) VALUES
(1, 3), (1, 5), (1, 10), (1, 11),
(2, 7), (2, 12), (2, 6), (2, 3),
(3, 1), (3, 8), (3, 11), (3, 14),
(4, 5), (4, 8), (4, 13), (4, 10),
(5, 2), (5, 12), (5, 9), (5, 11),
(6, 1), (6, 7), (6, 10), (6, 13),
(7, 3), (7, 10), (7, 13), (7, 5),
(8, 4), (8, 14), (8, 8), (8, 12),
(9, 6), (9, 9), (9, 11), (9, 1),
(10, 11), (10, 5), (10, 1), (10, 13),
(11, 1), (11, 9), (11, 13), (11, 6),
(12, 2), (12, 12), (12, 3), (12, 10),
(13, 3), (13, 13), (13, 10), (13, 7),
(14, 4), (14, 14), (14, 7), (14, 11),
(15, 5), (15, 15), (15, 9), (15, 12),
(16, 6), (16, 9), (16, 11), (16, 2),
(17, 7), (17, 13), (17, 8), (17, 1),
(18, 8), (18, 14), (18, 12), (18, 3),
(19, 10), (19, 11), (19, 13), (19, 5),
(20, 11), (20, 1), (20, 10), (20, 6),
(21, 2), (21, 12), (21, 6), (21, 10),
(22, 3), (22, 13), (22, 10), (22, 5),
(23, 4), (23, 14), (23, 7), (23, 11),
(24, 5), (24, 15), (24, 9), (24, 12),
(25, 6), (25, 9), (25, 11), (25, 2),
(26, 7), (26, 13), (26, 8), (26, 1),
(27, 8), (27, 14), (27, 12), (27, 3),
(28, 9), (28, 15), (28, 2), (28, 6),
(29, 10), (29, 1), (29, 13), (29, 5),
(30, 11), (30, 1), (30, 10), (30, 6),
(31, 1), (31, 9), (31, 13), (31, 11),
(32, 2), (32, 12), (32, 3), (32, 10),
(33, 3), (33, 13), (33, 10), (33, 7),
(34, 4), (34, 14), (34, 7), (34, 11),
(35, 5), (35, 15), (35, 9), (35, 12),
(36, 6), (36, 9), (36, 11), (36, 2),
(37, 7), (37, 13), (37, 8), (37, 1),
(38, 8), (38, 14), (38, 12), (38, 3),
(39, 10), (39, 11), (39, 13), (39, 5),
(40, 11), (40, 1), (40, 10), (40, 6),
(41, 1), (41, 9), (41, 13), (41, 11),
(42, 2), (42, 12), (42, 3), (42, 10),
(43, 3), (43, 13), (43, 10), (43, 7),
(44, 4), (44, 14), (44, 7), (44, 11),
(45, 5), (45, 15), (45, 9), (45, 12),
(46, 6), (46, 9), (46, 11), (46, 2),
(47, 7), (47, 13), (47, 8), (47, 1),
(48, 8), (48, 14), (48, 12), (48, 3),
(49, 10), (49, 11), (49, 13), (49, 5),
(50, 11), (50, 1), (50, 10), (50, 6);