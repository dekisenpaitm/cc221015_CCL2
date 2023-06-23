-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 23, 2023 at 03:04 PM
-- Server version: 8.0.33-0ubuntu0.22.04.2
-- PHP Version: 8.1.2-1ubuntu2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `DekisDatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `commentID` int NOT NULL,
  `userID` int NOT NULL,
  `contentID` int NOT NULL,
  `commentUserName` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `commentTitel` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `body` varchar(1080) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `commentDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`commentID`, `userID`, `contentID`, `commentUserName`, `commentTitel`, `body`, `commentDate`) VALUES
(41, 40, 18, 'Admin', 'This is a test', 'this is a test', '2023-06-23 08:35:27'),
(42, 48, 1, 'vic', 'Cool', 'Lets talk', '2023-06-23 09:45:19'),
(43, 48, 1, 'vic', 'eee', 'erererere', '2023-06-23 09:45:29'),
(44, 48, 1, 'vic', 'asasdas', 'dasdasdasdas', '2023-06-23 09:45:37');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contactID` int NOT NULL,
  `postDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) NOT NULL,
  `email` varchar(256) NOT NULL,
  `titel` varchar(256) NOT NULL,
  `description` varchar(1080) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contactID`, `postDate`, `name`, `email`, `titel`, `description`) VALUES
(40, '2023-06-22 15:00:37', 'ccyxyccyx', 'ccyxyccyx', 'cyxyxcyxccxy', 'cyxcyxcyxcyx'),
(41, '2023-06-22 15:00:54', ' ', ' ', ' ', ' ');

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE `content` (
  `contentID` int NOT NULL,
  `type` text,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(1080) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`contentID`, `type`, `name`, `description`, `path`, `link`) VALUES
(1, 'game', 'Project:Soul', 'Since time has been reverted creatures and monsters are crawling out of their holes to gather \"time\". \"Reset the world clock\". Probably the last sentence our heroine Zephia remembers before waking up in front of a clock tower without any clue who she is and why she\'s even there. At her side is Nova. He\'s Zephias companion and the key trigger to her abilitys. Together they\'re trying to find out what happened to the world and to her. ', '/games/projectsoul.png', 'https://dekisenpaitm.itch.io/project-soul'),
(2, 'pixel', 'Zephia & Nova', 'These two are the main protagonists to project soul. Zephia (blue hair, red hoodie) is capable of twisting time and her canine companion Nova can twist space to transform into different weapons. Their main goal: Fix the world clock and get answers.', '/pixel/zephianova.png', 'https://www.instagram.com/p/CfPZNDYIDdo/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='),
(3, '', 'TestUiUX', 'This is a test UIUX', '../uiux/design_a.figma\r\n', 'figma.com/randomlink'),
(4, 'game', 'Dekis Dungeon Slayer', 'This time I got a little whack a mole - HTML/CSS/Javasctipt edition (no canvas)\r\n\r\nAll you gotta do, is exactly in the titel - SLAY! Try to kill as many bats as possible and collect the chest for even more points!\r\n\r\nWhat would be a good dungeon crawler without mimics? Right? So be careful if they bite u you\'re going to lose life, as long as you still have some, after that it\'s going to steal you your valuable time >:D\r\n\r\nThe Goal? SLAY EM ALL and AS MANY AS POSSIBLE! Collect points and create a new Highscore for yourself ;)', '/games/dekisdungeon.png', 'https://dekisenpaitm.itch.io/dds'),
(5, 'game', 'Blue Slime Chronicles', '“After years of war, the evil shadow creatures managed to overthrow the peaceful slime kingdom. What’s left is a single blue slime, determined to find his lost slime friends and restore the slime kingdom before the shadow kingdom captures each and every one of them.\r\n\r\nA lighthearted side scroll puzzle game with aspects of modern jump and runs sends the player into a mysterious world full of adventures. Help the blue slime find the hidden keys along the maps, solve the puzzles and save his friends!”', '/games/blueslimechronicles.png', 'https://dekisenpaitm.itch.io/blueslimechronicles'),
(6, 'game', 'The Root Problem', 'project for the #GGJ2023! The theme for this one was \"roots\". I mean, totally clear we gotta do something with mathemathics! right?... RIGHT?!\r\n\r\nWelcome to the best math-test you\'ll ever experience! Time to root some numbers!\r\n\r\nRecommendation: Get a softdrink, something to snack and try to get the highest score possible! Let us know how high u got and what grade you received in the comments!', '/games/therootproblem.png', 'https://dekisenpaitm.itch.io/therootproblem'),
(8, 'pixel', 'Alphaboss & Minions', 'The first major encounter for my alpha testers where these undead fellas. If you enjoy darksouls/bloodborne/elden ring you might wanna give it a try and see if you can beat them!', '/pixel/alphaboss_1.png', 'https://www.instagram.com/p/CgXC0AxIVHB/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='),
(9, 'pixel', 'D.T.I.Y.S [1]', 'The first set of my DTIYS for some of my favorite Instagram artists!', '/pixel/dtiys_1.png', 'https://www.instagram.com/p/ChXFmF1I-yH/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='),
(10, 'pixel', 'D.T.I.Y.S [2]', 'The second set of DTIYS for some of my favorite artists on Instagram!', '/pixel/dtiys_2.png', 'https://www.instagram.com/p/ChdQc5VIItP/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='),
(11, 'pixel', 'Black & White', 'This is one of the first \"sketches\" I drew for the two main characters Zephia & Nova from Project:Soul!', '/pixel/blackandwhite.png', 'https://www.instagram.com/p/CfejeHAIw9k/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='),
(12, 'pixel', 'Snakepond', 'This was a practice for tilemaps and a new twist for enemy sprites in a sticker style.', '/pixel/snakepond.png', 'https://www.instagram.com/p/CpnfF7wIx3o/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='),
(13, 'pixel', 'Bossmob', 'Tried to apply a new, darker, style. Since the story will be quite dark I want the sprites and tiles to fit into that.', '/pixel/shadowboss.png', 'https://www.instagram.com/p/Cl1j2broWPt/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='),
(14, 'pixel', 'Slime Kingdom', 'I made this little collection of slimes just to try out new ways of getting a smooth animation with the smallest amount of frames as possible. Each slime animation consists of only 6 frames!', '/pixel/slimes.png', 'https://www.instagram.com/p/ChfFLAsInQN/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='),
(15, 'pixel', 'Time Goddess', 'One of the main topics in Project:Soul revolves around the Goddess of Time itself. What happend to her? Why did the world become what it is currently? Wanna find out more? Make sure too check out the current process of Project:Soul!', '/pixel/timegodess.png', 'https://www.instagram.com/p/Cmw-gmbIEPh/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='),
(16, 'uiux', 'SSC:Project [TCG]', 'This mock-up page was designed for my(our group) project in the second semester.', '/uiux/ssc.png', 'https://www.figma.com/proto/GvHhWMBtp6lNZKIb5IedcG/TCG?page-id=0%3A1&node-id=1-2\r\n'),
(17, 'uiux', 'VID: Project [Streaming PF]', 'Our group task was to design a streaming plattform. We decided to go for one which only containts the trashiest of the trash movies - TrashTaste. Let me know how you like trouble our mascot!', '/uiux/vid.png', 'https://www.figma.com/proto/7Xt1QYfTk48r8IHfU7SeHv/VID-TrashTaste?page-id=19%3A13&type=design&node-id=192-1242&viewport=304%2C225%2C0.11&scaling=scale-down&starting-point-node-id=192%3A1242'),
(18, 'uiux', 'RD: Project[Bank App]', 'For this projekt I had to design a bank app in any game universe I wanted. I decided to go for a Hyrule/Legend of Zelda themed one.', '/uiux/fwoc.png', 'https://www.figma.com/proto/GbNaFyZRWWVabJfeOBK08F/Kovacevic_Dejan_cc221015?page-id=1%3A11&type=design&node-id=323-1772&viewport=393%2C675%2C0.07&scaling=contain&starting-point-node-id=330%3A3313');

-- --------------------------------------------------------

--
-- Table structure for table `userLikes`
--

CREATE TABLE `userLikes` (
  `likesID` int NOT NULL,
  `userID` int NOT NULL,
  `contentID` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `userLikes`
--

INSERT INTO `userLikes` (`likesID`, `userID`, `contentID`) VALUES
(42, 6, 1),
(4, 10, 1),
(44, 18, 2),
(69, 40, 1),
(67, 40, 18),
(68, 48, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` int NOT NULL,
  `name` varchar(32) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` text NOT NULL,
  `role` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `name`, `email`, `password`, `role`) VALUES
(6, 'Florian', 'test@hotmail.com', '$2b$10$IgtEE0/01hp5G2abIEp6f.T9Y4qmVzbQqa9z3419z.5FR5p5Kt8Ga', 'user'),
(10, 'Kevin', 'test@gmail.com', '$2b$10$Bd0249nSZcChPrmyNW3S8O42O7xh43StRTsFY6IRMS.reBZ/Ip.8u', 'user'),
(16, 'Dave', 'dave@id.com', '$2b$10$rsImrjdF/oYX.0Ja5DyzQu6bw3ji5HqqSssOSa5lMYH6s55hA/ZPu', 'user'),
(17, 'Gorek', 'gorek@mail.com', '$2b$10$u3lA182ZxDBCkrQ2g8OAAuNxw9DSumS/k5POC.p4Gqf94VNZ5m6gW', 'user'),
(18, 'Kego', 'kego@kego.com', '$2b$10$TGzUk1VBFLpRErp1/CJdV./bDqXa0YbRLwGF5tDy8yRfi6AL95/A.', 'user'),
(40, 'Admin', 'admin@admin.admin', '$2b$10$owIpKP//Yg9lcZCMu6ba8ezRjw1YF87ftlSNMyvc5VeZVGAqDLexO', 'admin'),
(48, 'vic', 'vic', '$2b$10$nPPAx.arBUVQvsp29Cbkk.Rl7srZJXBjRJvi6p4cL/vaRtzKQFlIi', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`commentID`),
  ADD KEY `userCommentID` (`userID`) USING BTREE,
  ADD KEY `contentCommentID` (`contentID`) USING BTREE;

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contactID`);

--
-- Indexes for table `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`contentID`);

--
-- Indexes for table `userLikes`
--
ALTER TABLE `userLikes`
  ADD PRIMARY KEY (`likesID`),
  ADD UNIQUE KEY `userID` (`userID`,`contentID`),
  ADD KEY `contantLikesID` (`contentID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `name` (`name`,`email`),
  ADD UNIQUE KEY `name_2` (`name`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `commentID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contactID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `content`
--
ALTER TABLE `content`
  MODIFY `contentID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `userLikes`
--
ALTER TABLE `userLikes`
  MODIFY `likesID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `contentID` FOREIGN KEY (`contentID`) REFERENCES `content` (`contentID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `userID` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userLikes`
--
ALTER TABLE `userLikes`
  ADD CONSTRAINT `contantLikesID` FOREIGN KEY (`contentID`) REFERENCES `content` (`contentID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `userLikesID` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
