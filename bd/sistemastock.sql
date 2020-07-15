-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-07-2020 a las 03:21:55
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistemastock`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `idCliente` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `direccion` varchar(40) NOT NULL,
  `telefono` varchar(40) NOT NULL,
  `correo` varchar(40) NOT NULL,
  `hombre` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`idCliente`, `nombre`, `apellido`, `direccion`, `telefono`, `correo`, `hombre`) VALUES
(1, 'Fernando', 'Barragán', 'Costa Rica 443', '2994-688083', 'barragan.fer10@gmail.com', 1),
(2, 'genaro', 'machi', 'ohiggins 400', '2494-673213', 'genaro.machi@gmail.com', 1),
(3, 'leonel ', 'dimasi', 'antonena 34', '312312312321123', 'leonel@gmail.com', 1),
(4, 'angel', 'barragan', 'costa rica 443', '2494-444704', 'angel@gmail.com', 1),
(5, 'Agustina', 'Ducasse', 'chacabuco 1153 depto 4', '2494213312', 'agusDucasse@gmail.com', 0),
(6, 'susana', 'Inglese', 'costa rica 443', '2494543212', 'susana.inglese@gmail.com', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejemplo`
--

CREATE TABLE `ejemplo` (
  `id` int(11) NOT NULL,
  `img` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `id_marca` int(11) NOT NULL,
  `nombreMarca` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`id_marca`, `nombreMarca`) VALUES
(1, 'nike'),
(2, 'adidas'),
(3, 'puma'),
(4, 'under armour'),
(5, 'trucker');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `idPedido` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `talle` varchar(20) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `fechaPedido` date NOT NULL,
  `costoTotal` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `idProducto` int(11) NOT NULL,
  `idTipo` int(11) NOT NULL,
  `club` varchar(40) NOT NULL,
  `color` varchar(40) NOT NULL,
  `idVendedor` int(11) NOT NULL,
  `imagen` text NOT NULL,
  `isDisponible` tinyint(1) NOT NULL,
  `precioXUnid` double NOT NULL,
  `idMarca` int(11) NOT NULL,
  `talle` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`idProducto`, `idTipo`, `club`, `color`, `idVendedor`, `imagen`, `isDisponible`, `precioXUnid`, `idMarca`, `talle`) VALUES
(76, 2, 'river plate', 'negro', 1, 'buzo-river-gris.png', 1, 1900, 2, ''),
(77, 2, 'river plate', 'blanco', 1, 'buzo-river-blanco.png', 1, 1900, 2, ''),
(78, 2, 'Boca Juniors', 'azul', 1, 'buzo-boca-azul.png', 1, 1900, 2, ''),
(79, 2, 'Boca juniors', 'blanco', 1, 'buzo-boca-blanco.png', 1, 1900, 2, ''),
(80, 1, 'Boca Juniors', 'azul', 1, 'remera-boca-2020.png', 1, 1200, 2, ''),
(81, 1, 'San Lorenzo', 'negro', 2, 'sanLorenzoNegra.jpg', 0, 2000, 1, ''),
(82, 1, 'inter', 'celeste', 1, 'inter-celeste.jpg', 0, 1200, 1, ''),
(83, 2, 'independiente', 'rojo', 1, 'independiente.jpg', 0, 2000, 2, ''),
(84, 4, 'coyote', 'tricolor', 2, 'gorraCoyote.png', 1, 1100, 5, ''),
(85, 2, 'italia', 'verde', 1, 'buzo-italia-verde.png', 0, 1900, 2, 'L');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoproducto`
--

CREATE TABLE `tipoproducto` (
  `id_tipo` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipoproducto`
--

INSERT INTO `tipoproducto` (`id_tipo`, `nombre`) VALUES
(1, 'camiseta'),
(2, 'buzo retro'),
(3, 'campera'),
(4, 'gorra'),
(5, 'jogging');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor`
--

CREATE TABLE `vendedor` (
  `idVendedor` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `nomPagina` varchar(40) NOT NULL,
  `wsp` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `vendedor`
--

INSERT INTO `vendedor` (`idVendedor`, `nombre`, `nomPagina`, `wsp`) VALUES
(1, 'damian', 'Eldeportivoarg', '116354-4111'),
(2, 'gustavo', 'indumentaria importada', '115843-0307');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idCliente`);

--
-- Indices de la tabla `ejemplo`
--
ALTER TABLE `ejemplo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id_marca`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`idPedido`),
  ADD KEY `Idcliente` (`idCliente`),
  ADD KEY `idproducto` (`idProducto`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`idProducto`),
  ADD KEY `idvendedor` (`idVendedor`),
  ADD KEY `idTipo` (`idTipo`),
  ADD KEY `idMarca` (`idMarca`);

--
-- Indices de la tabla `tipoproducto`
--
ALTER TABLE `tipoproducto`
  ADD PRIMARY KEY (`id_tipo`);

--
-- Indices de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`idVendedor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `idCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `ejemplo`
--
ALTER TABLE `ejemplo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `id_marca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT de la tabla `tipoproducto`
--
ALTER TABLE `tipoproducto`
  MODIFY `id_tipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  MODIFY `idVendedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `Idcliente` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`idCliente`) ON DELETE CASCADE,
  ADD CONSTRAINT `idproducto` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `idMarca` FOREIGN KEY (`idMarca`) REFERENCES `marca` (`id_marca`) ON DELETE CASCADE,
  ADD CONSTRAINT `idTipo` FOREIGN KEY (`idTipo`) REFERENCES `tipoproducto` (`id_tipo`) ON DELETE CASCADE,
  ADD CONSTRAINT `idvendedor` FOREIGN KEY (`idVendedor`) REFERENCES `vendedor` (`idVendedor`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
