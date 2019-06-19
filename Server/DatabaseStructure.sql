-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 192.168.1.110
-- Generation Time: Jun 19, 2019 at 11:42 PM
-- Server version: 10.3.15-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fetlifeasl`
--

-- --------------------------------------------------------

--
-- Table structure for table `userdata`
--

CREATE TABLE `userdata` (
  `last_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(11) NOT NULL,
  `nickname` varchar(18) DEFAULT NULL,
  `age` int(11) DEFAULT 99,
  `gender` varchar(5) DEFAULT NULL,
  `role` varchar(15) DEFAULT NULL,
  `friend_count` int(11) DEFAULT NULL,
  `paid_account` tinyint(1) DEFAULT NULL,
  `location_locality` varchar(50) DEFAULT NULL,
  `location_region` varchar(50) DEFAULT NULL,
  `location_country` varchar(50) DEFAULT NULL,
  `avatar_url` varchar(164) DEFAULT NULL,
  `sexual_orientation` varchar(20) DEFAULT NULL,
  `interest_level` int(11) DEFAULT NULL,
  `looking_for` varchar(70) DEFAULT NULL,
  `relationships` int(11) DEFAULT NULL,
  `ds_relationships` int(11) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `websites` varchar(11) DEFAULT NULL,
  `last_activity` varchar(14) DEFAULT NULL,
  `fetishes_into` varchar(944) DEFAULT NULL,
  `fetishes_curious_about` varchar(87) DEFAULT NULL,
  `num_pics` int(11) DEFAULT NULL,
  `num_vids` int(11) DEFAULT NULL,
  `latest_posts` varchar(11) DEFAULT NULL,
  `groups_lead` varchar(11) DEFAULT NULL,
  `groups_member_of` varchar(11) DEFAULT NULL,
  `events_going_to` varchar(11) DEFAULT NULL,
  `events_maybe_going_to` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `AGR` (`age`,`gender`,`role`,`location_country`) USING BTREE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
