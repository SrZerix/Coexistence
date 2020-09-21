-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.6-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para bd_convivencia
CREATE DATABASE IF NOT EXISTS `bd_convivencia` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `bd_convivencia`;

-- Volcando estructura para tabla bd_convivencia.amonestacion
CREATE TABLE IF NOT EXISTS `amonestacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_alumno` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `id_asignatura` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `id_causaAmonestacion` int(11) NOT NULL,
  `fechaJefatura` date DEFAULT NULL,
  `id_sancion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_convivencia.amonestacion: ~11 rows (aproximadamente)
DELETE FROM `amonestacion`;
/*!40000 ALTER TABLE `amonestacion` DISABLE KEYS */;
INSERT INTO `amonestacion` (`id`, `id_alumno`, `id_profesor`, `id_asignatura`, `fecha`, `id_causaAmonestacion`, `fechaJefatura`, `id_sancion`) VALUES
	(23, 1, 3, 2, '2020-02-24', 3, '2020-03-05', 27),
	(24, 1, 3, 4, '2020-02-24', 3, '2020-03-13', 19),
	(25, 1, 3, 2, '2020-02-24', 4, '2020-03-05', 17),
	(28, 1, 3, 4, '2020-02-24', 7, '2020-03-12', 18),
	(29, 3, 1, 2, '2020-02-04', 1, NULL, NULL),
	(30, 3, 1, 2, '2020-02-24', 1, NULL, NULL),
	(31, 1, 4, 2, '2020-02-06', 1, '2020-03-05', 10),
	(43, 2, 4, 4, '2020-02-28', 5, NULL, NULL),
	(44, 1, 4, 4, '2020-03-07', 5, NULL, NULL),
	(45, 1, 3, 1, '2020-03-05', 7, NULL, NULL),
	(46, 1, 4, 4, '2020-03-06', 61, NULL, NULL);
/*!40000 ALTER TABLE `amonestacion` ENABLE KEYS */;

-- Volcando estructura para tabla bd_convivencia.causaexpulsion
CREATE TABLE IF NOT EXISTS `causaexpulsion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `denominacion` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_convivencia.causaexpulsion: ~6 rows (aproximadamente)
DELETE FROM `causaexpulsion`;
/*!40000 ALTER TABLE `causaexpulsion` DISABLE KEYS */;
INSERT INTO `causaexpulsion` (`id`, `denominacion`) VALUES
	(1, 'Insultos'),
	(2, 'Destrozos'),
	(3, 'Lenguaje Osceno'),
	(4, 'Ofensas'),
	(5, 'Copiar Examen');
/*!40000 ALTER TABLE `causaexpulsion` ENABLE KEYS */;

-- Volcando estructura para tabla bd_convivencia.causamonestacion
CREATE TABLE IF NOT EXISTS `causamonestacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `denominacion` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `denominacion` (`denominacion`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_convivencia.causamonestacion: ~7 rows (aproximadamente)
DELETE FROM `causamonestacion`;
/*!40000 ALTER TABLE `causamonestacion` DISABLE KEYS */;
INSERT INTO `causamonestacion` (`id`, `denominacion`) VALUES
	(6, 'Desobedencias'),
	(7, 'Distracción'),
	(1, 'Dormir en clase'),
	(4, 'Interrupciones'),
	(3, 'Ruidos molestos'),
	(5, 'Sin trabajar'),
	(2, 'Varios retrasos.');
/*!40000 ALTER TABLE `causamonestacion` ENABLE KEYS */;

-- Volcando estructura para tabla bd_convivencia.directas
CREATE TABLE IF NOT EXISTS `directas` (
  `id_alumno` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `causa` varchar(50) NOT NULL,
  `fechaJefatura` date NOT NULL,
  `id_sancion` int(11) NOT NULL,
  PRIMARY KEY (`id_alumno`,`id_profesor`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_convivencia.directas: ~0 rows (aproximadamente)
DELETE FROM `directas`;
/*!40000 ALTER TABLE `directas` DISABLE KEYS */;
/*!40000 ALTER TABLE `directas` ENABLE KEYS */;

-- Volcando estructura para tabla bd_convivencia.expulsion
CREATE TABLE IF NOT EXISTS `expulsion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_alumno` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `id_asignatura` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `id_causaExpulsion` int(11) NOT NULL,
  `fechaJefatura` date DEFAULT NULL,
  `id_sancion` int(11) DEFAULT NULL,
  `control` int(1) DEFAULT NULL,
  `firma` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_convivencia.expulsion: ~8 rows (aproximadamente)
DELETE FROM `expulsion`;
/*!40000 ALTER TABLE `expulsion` DISABLE KEYS */;
INSERT INTO `expulsion` (`id`, `id_alumno`, `id_profesor`, `id_asignatura`, `fecha`, `id_causaExpulsion`, `fechaJefatura`, `id_sancion`, `control`, `firma`) VALUES
	(2, 3, 1, 2, '2020-02-21', 1, '2020-02-02', 2, 0, '2020-10-09'),
	(12, 2, 4, 4, '2020-02-25', 2, NULL, NULL, 1, NULL),
	(48, 2, 4, 4, '2020-03-05', 4, NULL, NULL, 0, NULL),
	(49, 2, 4, 4, '2020-03-05', 5, NULL, NULL, 0, NULL),
	(51, 1, 4, 4, '2020-03-06', 1, '2020-02-29', 25, 1, '2020-03-12'),
	(54, 1, 4, 4, '2020-03-06', 5, NULL, NULL, 1, NULL),
	(67, 1, 4, 4, '2020-03-06', 5, NULL, NULL, 0, NULL),
	(74, 5, 4, 1, '2020-03-07', 1, NULL, NULL, 0, NULL);
/*!40000 ALTER TABLE `expulsion` ENABLE KEYS */;

-- Volcando estructura para tabla bd_convivencia.falta
CREATE TABLE IF NOT EXISTS `falta` (
  `idFalta` int(11) NOT NULL AUTO_INCREMENT,
  `denominacion` varchar(50) NOT NULL DEFAULT '',
  `alumno` int(11) NOT NULL,
  PRIMARY KEY (`idFalta`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla bd_convivencia.falta: ~3 rows (aproximadamente)
DELETE FROM `falta`;
/*!40000 ALTER TABLE `falta` DISABLE KEYS */;
INSERT INTO `falta` (`idFalta`, `denominacion`, `alumno`) VALUES
	(1, 'Bailar', 1),
	(3, 'Silbar', 1),
	(4, 'Grito', 1);
/*!40000 ALTER TABLE `falta` ENABLE KEYS */;

-- Volcando estructura para tabla bd_convivencia.faltasancionada
CREATE TABLE IF NOT EXISTS `faltasancionada` (
  `id_sancion` int(11) NOT NULL,
  `id_falta` int(11) NOT NULL,
  PRIMARY KEY (`id_sancion`,`id_falta`),
  KEY `faltaFaltaSancion` (`id_falta`),
  CONSTRAINT `sancionFaltaSancion` FOREIGN KEY (`id_sancion`) REFERENCES `sancion` (`id_sancion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_convivencia.faltasancionada: ~2 rows (aproximadamente)
DELETE FROM `faltasancionada`;
/*!40000 ALTER TABLE `faltasancionada` DISABLE KEYS */;
INSERT INTO `faltasancionada` (`id_sancion`, `id_falta`) VALUES
	(9, 3),
	(26, 4);
/*!40000 ALTER TABLE `faltasancionada` ENABLE KEYS */;

-- Volcando estructura para tabla bd_convivencia.sancion
CREATE TABLE IF NOT EXISTS `sancion` (
  `id_sancion` int(11) NOT NULL AUTO_INCREMENT,
  `fechaSancion` date NOT NULL,
  `denomSancion` varchar(50) NOT NULL,
  PRIMARY KEY (`id_sancion`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_convivencia.sancion: ~19 rows (aproximadamente)
DELETE FROM `sancion`;
/*!40000 ALTER TABLE `sancion` DISABLE KEYS */;
INSERT INTO `sancion` (`id_sancion`, `fechaSancion`, `denomSancion`) VALUES
	(2, '2020-03-17', 'Recoger Basura'),
	(7, '2020-03-12', 'Recitar'),
	(9, '2020-02-26', 'Flexiones'),
	(10, '2020-03-13', 'Recoger Basura'),
	(11, '2020-03-13', 'Bailar'),
	(12, '2020-03-28', 'OFdja'),
	(13, '2020-03-28', 'OFdja'),
	(14, '2020-03-28', 'OFdja'),
	(15, '2020-03-28', 'OFdja'),
	(16, '0000-00-00', 'fe'),
	(17, '2020-03-05', 'Hola guapo'),
	(18, '2020-03-12', 'Hola precioso'),
	(19, '2020-03-13', 'Recoger Basura'),
	(22, '2020-02-28', 'Prueba'),
	(23, '2020-03-12', 'Hola'),
	(24, '2020-03-04', 'Asd'),
	(25, '2020-02-29', 'er'),
	(26, '2222-02-22', 'Basura'),
	(27, '2020-03-05', 'sad');
/*!40000 ALTER TABLE `sancion` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
