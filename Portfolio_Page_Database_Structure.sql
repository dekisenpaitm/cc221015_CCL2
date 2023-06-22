SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `comment` (
  `commentID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `contentID` int(11) NOT NULL,
  `commentUserName` varchar(128) NOT NULL,
  `commentTitel` varchar(256) NOT NULL,
  `body` varchar(1080) NOT NULL,
  `commentDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `contact` (
  `contactID` int(11) NOT NULL,
  `postDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `name` varchar(128) NOT NULL,
  `email` varchar(256) NOT NULL,
  `titel` varchar(256) NOT NULL,
  `description` varchar(1080) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `content` (
  `contentID` int(11) NOT NULL,
  `type` text DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(1080) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `userLikes` (
  `likesID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `contentID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` text NOT NULL,
  `role` varchar(32) DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


ALTER TABLE `comment`
  ADD PRIMARY KEY (`commentID`),
  ADD KEY `userCommentID` (`userID`) USING BTREE,
  ADD KEY `contentCommentID` (`contentID`) USING BTREE;

ALTER TABLE `contact`
  ADD PRIMARY KEY (`contactID`);

ALTER TABLE `content`
  ADD PRIMARY KEY (`contentID`);

ALTER TABLE `userLikes`
  ADD PRIMARY KEY (`likesID`),
  ADD UNIQUE KEY `userID` (`userID`,`contentID`),
  ADD KEY `contantLikesID` (`contentID`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `name` (`name`,`email`),
  ADD UNIQUE KEY `name_2` (`name`),
  ADD UNIQUE KEY `email` (`email`);


ALTER TABLE `comment`
  MODIFY `commentID` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `contact`
  MODIFY `contactID` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `content`
  MODIFY `contentID` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `userLikes`
  MODIFY `likesID` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `comment`
  ADD CONSTRAINT `commentContentID` FOREIGN KEY (`contentID`) REFERENCES `content` (`contentID`),
  ADD CONSTRAINT `commentUserID` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `userLikes`
  ADD CONSTRAINT `contantLikesID` FOREIGN KEY (`contentID`) REFERENCES `content` (`contentID`),
  ADD CONSTRAINT `userLikesID` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
