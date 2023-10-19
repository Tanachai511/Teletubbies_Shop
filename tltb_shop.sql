-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 19, 2023 at 12:51 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tltb_shop`
--

DROP SCHEMA

IF EXISTS tltb_shop;
	CREATE SCHEMA tltb_shop COLLATE = utf8_general_ci;

USE tltb_shop;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `Cart_ID` int(11) NOT NULL,
  `Cart_Price` int(11) NOT NULL,
  `Cart_Quantity` int(11) NOT NULL,
  `Cart_TotalPrice` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`Cart_ID`, `Cart_Price`, `Cart_Quantity`, `Cart_TotalPrice`) VALUES
(1, 1500, 4, 1530),
(2, 1543, 4, 1573);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `Category_ID` int(11) NOT NULL,
  `Category_Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`Category_ID`, `Category_Name`) VALUES
(1, 'Shirts'),
(2, 'Jeans'),
(3, 'Swimwear'),
(4, 'Sleepwear'),
(5, 'Sportswear'),
(6, 'Jumpsuits'),
(7, 'Blazers'),
(8, 'Jackets'),
(9, 'Shoes');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `C_UserID` int(11) NOT NULL,
  `C_Username` varchar(25) NOT NULL,
  `C_Password` varchar(25) NOT NULL,
  `C_Name` varchar(255) NOT NULL,
  `C_Address` varchar(255) NOT NULL,
  `C_Phonenumber` int(10) NOT NULL,
  `C_Emaill` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`C_UserID`, `C_Username`, `C_Password`, `C_Name`, `C_Address`, `C_Phonenumber`, `C_Emaill`) VALUES
(1, 'JohnDoe', '123', 'John Doe', '123 Street,City,Country', 1234567890, 'johndoe@example.com'),
(2, 'MaxMessenger', '321', 'Max Messenger', '321 Street,City,Country', 631234567, 'maxmessenger@example.com'),
(3, 'GoatMessi', '888', 'Goat Messi', '888 Street,City,Country', 953123456, 'goatmessi@example.com'),
(4, 'StephCurry', '30', 'Steph Curry', '30 Street,City,Country', 993123456, 'stephcurry@example.com');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `Payment_ID` int(11) NOT NULL,
  `Payment_Type` enum('Paypal','Bank Transfer','Cash','') NOT NULL,
  `Payment_Date` datetime(6) NOT NULL,
  `Payment_Amount` int(11) NOT NULL,
  `Cart_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`Payment_ID`, `Payment_Type`, `Payment_Date`, `Payment_Amount`, `Cart_ID`) VALUES
(1, 'Cash', '2023-10-19 12:54:19.000000', 1530, 1),
(2, 'Cash', '2023-10-19 18:51:47.000000', 1573, 2),
(3, 'Cash', '2023-10-19 11:51:47.000000', 780, 2);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `Product_ID` int(11) NOT NULL,
  `Product_Name` varchar(255) NOT NULL,
  `Product_Price` int(11) NOT NULL,
  `Product_Detail` varchar(255) NOT NULL,
  `Product_Quantity` int(11) NOT NULL,
  `Category_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`Product_ID`, `Product_Name`, `Product_Price`, `Product_Detail`, `Product_Quantity`, `Category_ID`) VALUES
(1, 'Shirts1', 150, 'Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum r', 99, 1),
(2, 'Shirts2', 123, 'Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum r', 99, 1),
(3, 'Shirts3', 220, 'Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum r', 99, 1),
(4, 'Shoes1', 1050, 'Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum r', 99, 9);

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `R_ID` int(11) NOT NULL,
  `R_Date` date NOT NULL,
  `R_Rating` int(5) NOT NULL,
  `R_Comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `saller`
--

CREATE TABLE `saller` (
  `S_UserID` int(11) NOT NULL,
  `S_Username` varchar(25) NOT NULL,
  `S_Name` varchar(255) NOT NULL,
  `S_Password` varchar(25) NOT NULL,
  `S_Address` varchar(255) NOT NULL,
  `S_Phoneumber` int(10) NOT NULL,
  `S_Emaill` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `saller`
--

INSERT INTO `saller` (`S_UserID`, `S_Username`, `S_Name`, `S_Password`, `S_Address`, `S_Phoneumber`, `S_Emaill`) VALUES
(1, 'DoeJohn', 'Doe John', '132', '132 Street,City,Country', 551234567, 'doejohn@example.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`Cart_ID`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`Category_ID`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`C_UserID`),
  ADD UNIQUE KEY `C_Username` (`C_Username`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`Payment_ID`),
  ADD KEY `Cart_ID` (`Cart_ID`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`Product_ID`),
  ADD KEY `Category_ID` (`Category_ID`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`R_ID`);

--
-- Indexes for table `saller`
--
ALTER TABLE `saller`
  ADD PRIMARY KEY (`S_UserID`),
  ADD UNIQUE KEY `S_Username` (`S_Username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `Cart_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `Category_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `C_UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `Payment_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `Product_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `R_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `saller`
--
ALTER TABLE `saller`
  MODIFY `S_UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `FK_Cart_ID` FOREIGN KEY (`Cart_ID`) REFERENCES `cart` (`Cart_ID`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_Category_ID` FOREIGN KEY (`Category_ID`) REFERENCES `category` (`Category_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
