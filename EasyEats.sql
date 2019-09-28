-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.3.9-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para easy_eats
CREATE DATABASE IF NOT EXISTS `easy_eats` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `easy_eats`;

-- Volcando estructura para tabla easy_eats.burger
CREATE TABLE IF NOT EXISTS `burger` (
  `id` int(2) NOT NULL,
  `nombre` varchar(25) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `precio` int(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla easy_eats.burger: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `burger` DISABLE KEYS */;
INSERT INTO `burger` (`id`, `nombre`, `descripcion`, `precio`) VALUES
	(0, 'Hamburguesa de Res', 'Hamburguesa de carne de res sencilla con lechuga, jitomate, pepino y queso', 45),
	(1, 'Hamburguesa Doble', 'Hamburguesa con 2 filetes de carne, lechuga, jitomate, pepino y queso', 60),
	(2, 'Hamburguesa Artesanal', 'Hamburguesa con pan artesanal, lechuga, jitomate, pepino y queso', 55),
	(3, 'Hamburguesa Hawaiana', 'Hamburguesa con jamon,pi¤a y queso', 50),
	(4, 'Hamburguesa cuabana', 'Hamburguesa con carne de res, salchicha, tocino, jamon y queso', 65),
	(5, 'Hamburguesa de pollo', 'Hamburguesa con una gran pechuga de pollo, lechuga, jitomate, cebolla y queso', 60),
	(6, 'Hamburguesa de camaron', 'Hamburguesa con camarones, lechuga, jitomate, cebolla y queso', 75),
	(7, 'Hamburguesa toluque¤a', 'Hamburguesa con carne de res, chorizo, guacamole, lechuga, jitomate, cebolla y queso', 70),
	(8, 'Big Burger', 'Hamburguesa especial de la casa, con carne de res, lechuga, jitomate,pepinillos, cebolla, queso y tocino', 90),
	(9, 'Kid Burger', 'Hamburguesa peque¤a ideal para los ni¤os, con carne de res, lechuga, jitomate, cebolla, queso y tocino', 35);
/*!40000 ALTER TABLE `burger` ENABLE KEYS */;

-- Volcando estructura para tabla easy_eats.carrito
CREATE TABLE IF NOT EXISTS `carrito` (
  `username` varchar(25) DEFAULT NULL,
  `comidas` varchar(50) DEFAULT NULL,
  `precio` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla easy_eats.carrito: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;

-- Volcando estructura para tabla easy_eats.pizza
CREATE TABLE IF NOT EXISTS `pizza` (
  `id` int(2) NOT NULL,
  `nombre` varchar(25) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `precio` int(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla easy_eats.pizza: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `pizza` DISABLE KEYS */;
INSERT INTO `pizza` (`id`, `nombre`, `descripcion`, `precio`) VALUES
	(0, 'Pizza de Pepperoni', 'Pizza que contiene pepperoni, salsa de tomate y queso', 79),
	(1, 'Pizza hawaiana', 'Pizza clasica de jamon y piÏa', 89),
	(2, 'Pizza de Carnes', 'Pizza con pepperoni, jamon, carne de res, carne de puerco, salchicha y tocino', 99),
	(3, 'Pizza Suprema', 'Pizza con pepperoni, jamon, champiÏon, chile morron, cebolla y carne de puerco', 99),
	(4, 'Pizza Parrillada', 'Pizza con jamon, chorizo, chile morron y cebolla', 89),
	(5, 'Pizza franco-americana', 'Pizza con pepperoni y champiÏon', 89),
	(6, 'Pizza cheesy', 'Pizza con 3 tipos de quezo, mozarella, cheddar y parmesano', 79),
	(7, 'Pizza Vegetariana', 'Pizza con jitomate, cebolla, chile morron, champiÏon y aceitunas', 89),
	(8, 'Pizza Duo Clasico', 'Pizza con pepperoni y jamon', 79),
	(9, 'Easy Pizza', 'Pizza especial de la casa, con pepperoni, jamon, salchicha, champiÏon y mucho queso', 99);
/*!40000 ALTER TABLE `pizza` ENABLE KEYS */;

-- Volcando estructura para tabla easy_eats.sodas
CREATE TABLE IF NOT EXISTS `sodas` (
  `id` int(2) NOT NULL,
  `nombre` varchar(25) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `precio` int(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla easy_eats.sodas: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `sodas` DISABLE KEYS */;
INSERT INTO `sodas` (`id`, `nombre`, `descripcion`, `precio`) VALUES
	(0, 'Coca-Cola', 'Coca-Cola de 500ml', 15),
	(1, 'Sprite', 'Sprite de 500ml', 15),
	(2, 'Sidral', 'Sidral de 500ml', 15),
	(3, 'Fresca', 'Fresca de 500ml', 15),
	(4, 'Fanta', 'Fanta de 500ml', 15),
	(5, 'Fuze Tea de Durazno', 'Faze Tea de 500ml sabor durazno', 17),
	(6, 'Fuze Tea de Frutos Rojos', 'Faze Tea de 500ml sabor Frutos Rojos', 17),
	(7, 'Delaware Punch', 'Delaware Punch de 600ml', 15),
	(8, 'DEL VALLE&NADA Naranja', 'DEL VALLE&NADA de 600ml', 15),
	(9, 'DEL VALLE&NADA Limon', 'DEL VALLE&NADA de 600ml', 15);
/*!40000 ALTER TABLE `sodas` ENABLE KEYS */;

-- Volcando estructura para tabla easy_eats.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `username` varchar(25) NOT NULL,
  `password` varchar(500) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `Apellido` varchar(50) DEFAULT NULL,
  `domicilio` varchar(40) DEFAULT NULL,
  `pago` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla easy_eats.usuarios: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`username`, `password`, `email`, `nombre`, `Apellido`, `domicilio`, `pago`) VALUES
	('chava', '$2b$10$t93LghvbCCNPzb/XW0JeJeVDXwk4IjRvDp9w.c8u.D9khm2vvv6qG', 'chava@gmail.com', 'salvador', 'Castellanod pacheco', 'Vallarta 95', 'Tarjeta'),
	('El_Isi', '$2b$10$bKBeGf.WT1SbE5wkAg6py.ZvwN4lUzr8029HZknYRs/Ghlg1b4Lzi', 'chilito395@gmail.com', 'Isidro', 'Gonzalez Gomez', 'Santa Teresa 318 Colonia la providencia', 'Efectivo'),
	('Lewis', '$2b$10$QQHw7s/iGJ6lc3ia8VtqDOprOfbRqCd5CUbCvKpBVL86Uq9MaG8ZG', 'lewiz.icco@gmail.com', 'Luis', 'Duran Garcia', 'Loma soleada', 'Tarjeta');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
