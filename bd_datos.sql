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


-- Volcando estructura de base de datos para bd_datos
CREATE DATABASE IF NOT EXISTS `bd_datos` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `bd_datos`;

-- Volcando estructura para tabla bd_datos.alumno
CREATE TABLE IF NOT EXISTS `alumno` (
  `idAlumno` int(11) NOT NULL AUTO_INCREMENT,
  `id_grupo` int(11) NOT NULL DEFAULT 0,
  `nombreAlumno` varchar(50) NOT NULL,
  `apellidosAlumno` varchar(50) NOT NULL,
  PRIMARY KEY (`idAlumno`),
  KEY `alumnosGrupos` (`id_grupo`),
  CONSTRAINT `alumnosGrupos` FOREIGN KEY (`id_grupo`) REFERENCES `grupos` (`idGrupos`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_datos.alumno: ~8 rows (aproximadamente)
DELETE FROM `alumno`;
/*!40000 ALTER TABLE `alumno` DISABLE KEYS */;
INSERT INTO `alumno` (`idAlumno`, `id_grupo`, `nombreAlumno`, `apellidosAlumno`) VALUES
	(1, 4, 'Alan', 'Sifre'),
	(2, 4, 'Tiberiu', 'Sifre'),
	(3, 2, 'Isabel', 'Lopez'),
	(4, 2, 'Luisa', 'Toledo'),
	(5, 1, 'Pedro', 'Moreno'),
	(6, 1, 'Luis', 'Garcia'),
	(7, 3, 'Marta', 'Chicano'),
	(8, 3, 'Matias', 'Sancho');
/*!40000 ALTER TABLE `alumno` ENABLE KEYS */;

-- Volcando estructura para tabla bd_datos.alumnofamilia
CREATE TABLE IF NOT EXISTS `alumnofamilia` (
  `id_familia` int(11) NOT NULL,
  `id_alumno` int(11) NOT NULL,
  PRIMARY KEY (`id_familia`,`id_alumno`),
  KEY `FK_alumno` (`id_alumno`),
  CONSTRAINT `FK_alumno` FOREIGN KEY (`id_alumno`) REFERENCES `alumno` (`idAlumno`),
  CONSTRAINT `FK_familia` FOREIGN KEY (`id_familia`) REFERENCES `familia` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_datos.alumnofamilia: ~7 rows (aproximadamente)
DELETE FROM `alumnofamilia`;
/*!40000 ALTER TABLE `alumnofamilia` DISABLE KEYS */;
INSERT INTO `alumnofamilia` (`id_familia`, `id_alumno`) VALUES
	(1, 1),
	(1, 8),
	(2, 7),
	(3, 6),
	(4, 5),
	(5, 4),
	(6, 3),
	(7, 2);
/*!40000 ALTER TABLE `alumnofamilia` ENABLE KEYS */;

-- Volcando estructura para tabla bd_datos.asignatura
CREATE TABLE IF NOT EXISTS `asignatura` (
  `idAsignatura` int(11) NOT NULL AUTO_INCREMENT,
  `denominacionAsignatura` varchar(50) NOT NULL,
  PRIMARY KEY (`idAsignatura`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_datos.asignatura: ~5 rows (aproximadamente)
DELETE FROM `asignatura`;
/*!40000 ALTER TABLE `asignatura` DISABLE KEYS */;
INSERT INTO `asignatura` (`idAsignatura`, `denominacionAsignatura`) VALUES
	(1, 'Aplicaciones Web'),
	(2, 'Sistemas Servidor'),
	(3, 'Programacion'),
	(4, 'Desarrollo Servidor');
/*!40000 ALTER TABLE `asignatura` ENABLE KEYS */;

-- Volcando estructura para tabla bd_datos.familia
CREATE TABLE IF NOT EXISTS `familia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombreFamilia` varchar(50) NOT NULL,
  `apellidoFamilia` varchar(50) NOT NULL,
  `correoFamilia` varchar(50) NOT NULL,
  `telefonoFamilia` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_datos.familia: ~7 rows (aproximadamente)
DELETE FROM `familia`;
/*!40000 ALTER TABLE `familia` DISABLE KEYS */;
INSERT INTO `familia` (`id`, `nombreFamilia`, `apellidoFamilia`, `correoFamilia`, `telefonoFamilia`) VALUES
	(1, 'Maria', 'Martinez', 'Martineezz@gmail.com', '645896321'),
	(2, 'Lucia', 'Cortijo', 'cortijooo@gmail.com', '640643254'),
	(3, 'Marcos', 'Mendoza', 'mendozaa@gmail.com', '607899234'),
	(4, 'Pedro', 'Perez', 'pereez@gmail.com', '653423333'),
	(5, 'Garcia', 'Garcia', 'garciiia@gmail.com', '645345123'),
	(6, 'Ana', 'Del Mar', 'maaaardel@gmail.com', '609876456'),
	(7, 'Luis', 'Sancho', 'sanchooo@gmail.com', '678452324');
/*!40000 ALTER TABLE `familia` ENABLE KEYS */;

-- Volcando estructura para tabla bd_datos.grupos
CREATE TABLE IF NOT EXISTS `grupos` (
  `idGrupos` int(11) NOT NULL AUTO_INCREMENT,
  `nombreGrupos` varchar(50) NOT NULL,
  PRIMARY KEY (`idGrupos`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_datos.grupos: ~4 rows (aproximadamente)
DELETE FROM `grupos`;
/*!40000 ALTER TABLE `grupos` DISABLE KEYS */;
INSERT INTO `grupos` (`idGrupos`, `nombreGrupos`) VALUES
	(1, '1º SMR'),
	(2, '2º SMR'),
	(3, '1º DAW'),
	(4, '2º DAW');
/*!40000 ALTER TABLE `grupos` ENABLE KEYS */;

-- Volcando estructura para tabla bd_datos.perfil
CREATE TABLE IF NOT EXISTS `perfil` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(20) NOT NULL,
  `pass` varchar(50) NOT NULL DEFAULT '',
  `idProfesor` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `perfilProfesor` (`idProfesor`),
  CONSTRAINT `perfilProfesor` FOREIGN KEY (`idProfesor`) REFERENCES `profesor` (`idProfesor`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla bd_datos.perfil: ~3 rows (aproximadamente)
DELETE FROM `perfil`;
/*!40000 ALTER TABLE `perfil` DISABLE KEYS */;
INSERT INTO `perfil` (`id`, `userName`, `pass`, `idProfesor`) VALUES
	(1, 'juPa', '1234', 1),
	(2, 'paPa', '1234', 2),
	(22, 'luPa', '1234', 3),
	(23, 'pePa', '1234', 4);
/*!40000 ALTER TABLE `perfil` ENABLE KEYS */;

-- Volcando estructura para tabla bd_datos.profesor
CREATE TABLE IF NOT EXISTS `profesor` (
  `idProfesor` int(11) NOT NULL AUTO_INCREMENT,
  `nombreProfesor` varchar(50) CHARACTER SET latin1 NOT NULL,
  `apellidosProfesor` varchar(50) CHARACTER SET latin1 NOT NULL,
  `telefonoProfesor` varchar(50) CHARACTER SET latin1 NOT NULL,
  `perfilProfesor` set('Profesor','Jefe de estudios') CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`idProfesor`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla bd_datos.profesor: ~5 rows (aproximadamente)
DELETE FROM `profesor`;
/*!40000 ALTER TABLE `profesor` DISABLE KEYS */;
INSERT INTO `profesor` (`idProfesor`, `nombreProfesor`, `apellidosProfesor`, `telefonoProfesor`, `perfilProfesor`) VALUES
	(1, 'Juan', 'Perez', '645341234', 'Profesor'),
	(2, 'Paula', 'Marino', '623156123', 'Profesor'),
	(3, 'Lucia', 'Pardo', '654567680', 'Profesor'),
	(4, 'Pedro', 'Rueda', '654789123', 'Jefe de estudios');
/*!40000 ALTER TABLE `profesor` ENABLE KEYS */;

-- Volcando estructura para tabla bd_datos.profesorgrupoasignatura
CREATE TABLE IF NOT EXISTS `profesorgrupoasignatura` (
  `id_profesor` int(11) NOT NULL,
  `id_grupo` int(11) NOT NULL,
  `id_asignatura` int(11) NOT NULL,
  PRIMARY KEY (`id_profesor`,`id_grupo`,`id_asignatura`),
  KEY `FK_grupo` (`id_grupo`),
  KEY `FK_asignatura` (`id_asignatura`),
  CONSTRAINT `FK_asignatura` FOREIGN KEY (`id_asignatura`) REFERENCES `asignatura` (`idAsignatura`),
  CONSTRAINT `FK_grupo` FOREIGN KEY (`id_grupo`) REFERENCES `grupos` (`idGrupos`),
  CONSTRAINT `FK_profesor` FOREIGN KEY (`id_profesor`) REFERENCES `profesor` (`idProfesor`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_datos.profesorgrupoasignatura: ~8 rows (aproximadamente)
DELETE FROM `profesorgrupoasignatura`;
/*!40000 ALTER TABLE `profesorgrupoasignatura` DISABLE KEYS */;
INSERT INTO `profesorgrupoasignatura` (`id_profesor`, `id_grupo`, `id_asignatura`) VALUES
	(1, 1, 1),
	(1, 2, 4),
	(2, 1, 2),
	(2, 2, 3),
	(3, 3, 3),
	(3, 4, 1),
	(4, 3, 2),
	(4, 4, 4);
/*!40000 ALTER TABLE `profesorgrupoasignatura` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
