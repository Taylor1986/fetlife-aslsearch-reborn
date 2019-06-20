-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 192.168.1.110
-- Generation Time: Jun 20, 2019 at 03:34 PM
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
  `nickname` varchar(75) DEFAULT NULL,
  `age` tinyint(11) DEFAULT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `role` varchar(25) DEFAULT NULL,
  `friend_count` int(11) DEFAULT NULL,
  `paid_account` tinyint(1) DEFAULT NULL,
  `location_locality` varchar(75) DEFAULT NULL,
  `location_region` varchar(75) DEFAULT NULL,
  `location_country` varchar(75) DEFAULT NULL,
  `avatar_url` varchar(254) DEFAULT NULL,
  `sexual_orientation` varchar(50) DEFAULT NULL,
  `interest_level` varchar(254) DEFAULT NULL,
  `looking_for` varchar(254) DEFAULT NULL,
  `relationships` text DEFAULT NULL,
  `ds_relationships` text DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `websites` text DEFAULT NULL,
  `last_activity` varchar(254) DEFAULT NULL,
  `fetishes_into` text DEFAULT NULL,
  `fetishes_curious_about` text DEFAULT NULL,
  `num_pics` int(11) DEFAULT NULL,
  `num_vids` int(11) DEFAULT NULL,
  `latest_posts` text DEFAULT NULL,
  `groups_lead` text DEFAULT NULL,
  `groups_member_of` text DEFAULT NULL,
  `events_going_to` text DEFAULT NULL,
  `events_maybe_going_to` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `AGRCR` (`age`,`gender`,`role`,`location_country`,`location_region`),
  ADD KEY `gender` (`gender`),
  ADD KEY `role` (`role`),
  ADD KEY `location_region` (`location_region`),
  ADD KEY `location_country` (`location_country`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
