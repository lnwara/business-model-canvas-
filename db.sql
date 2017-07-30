-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 27, 2017 at 09:29 AM
-- Server version: 5.6.35
-- PHP Version: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `business_model`
--

-- --------------------------------------------------------

--
-- Table structure for table `canvas`
--

CREATE TABLE `canvas` (
  `id` int(10) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `customer_segment` varchar(1000) NOT NULL,
  `value_propostion` varchar(1000) NOT NULL,
  `chanels` varchar(1000) NOT NULL,
  `customer_relashionship` varchar(1000) NOT NULL,
  `revenue_stream` varchar(1000) NOT NULL,
  `key_resources` varchar(1000) NOT NULL,
  `key_activites` varchar(1000) NOT NULL,
  `key_partner` varchar(1000) NOT NULL,
  `cost_structure` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `canvas`
--

INSERT INTO `canvas` (`id`, `name`, `email`, `customer_segment`, `value_propostion`, `chanels`, `customer_relashionship`, `revenue_stream`, `key_resources`, `key_activites`, `key_partner`, `cost_structure`) VALUES
(1, 'scacs', NULL, '', '', '', '', '', '', '', '', ''),
(2, 'kjkjjjj', 'ds', '', '', '', '', '', '', '', '', ''),
(3, '', '', 'km\r\n', 'l;', 'kjjjkjj', 'jkj', 'kjkjjjj', 'hjhhjh', 'jhhjh', 'jhhhhjh', 'jhhjh');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `canvas`
--
ALTER TABLE `canvas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `canvas`
--
ALTER TABLE `canvas`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
