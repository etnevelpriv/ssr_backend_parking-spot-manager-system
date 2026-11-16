-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Gép: localhost:3306
-- Létrehozás ideje: 2026. Nov 11. 10:57
-- Kiszolgáló verziója: 8.4.3
-- PHP verzió: 8.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `parkolo`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `parkolas`
--

CREATE TABLE `parkolas` (
  `id` int NOT NULL,
  `rendszam` varchar(10) NOT NULL,
  `tulajdonos` varchar(100) NOT NULL,
  `idotartam` int NOT NULL,
  `fizetve` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- A tábla adatainak kiíratása `parkolas`
--

INSERT INTO `parkolas` (`id`, `rendszam`, `tulajdonos`, `idotartam`, `fizetve`) VALUES
(1, 'AA BB-123', 'Kovács Péter', 3, 1),
(2, 'CD EF-456', 'Nagy Anna', 12, 0),
(3, 'GH IJ-789', 'Szabó Tamás', 5, 1),
(4, 'KL MN-234', 'Tóth Eszter', 8, 0),
(5, 'OP QR-567', 'Varga Gábor', 2, 1),
(6, 'ST UV-890', 'Kiss Viktória', 24, 0),
(7, 'WX YZ-111', 'Molnár Bence', 6, 1),
(8, 'AB CD-222', 'Farkas Dóra', 15, 0),
(9, 'EF GH-333', 'Balogh Zoltán', 1, 1),
(10, 'IJ KL-444', 'Papp Zsófia', 10, 0);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `parkolas`
--
ALTER TABLE `parkolas`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `parkolas`
--
ALTER TABLE `parkolas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
