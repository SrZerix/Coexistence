<?php

include 'conexionConvi.php';

global $conexionConvi;

$idAlumno = $_REQUEST["idAlumno"];

$idProfesor = $_REQUEST["idProfesor"];

$idAsignatura = $_REQUEST["idAsignatura"];

$fecha = $_REQUEST["fecha"];

$idCausa = $_REQUEST["idCausa"];


$sql = "INSERT amonestacion VALUES (null,$idAlumno,$idProfesor,$idAsignatura,'$fecha',$idCausa,null,null)";

$result = $conexionConvi -> query($sql);

if(!$result){

    echo $conexionConvi->error;
}
