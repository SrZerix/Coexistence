<?php

include 'conexionDatos.php';

global $conexionDatos;

$nombre = $_REQUEST["nombre"];

$apellidos = $_REQUEST["apellido"];

$sql = ("SELECT *
FROM profesor p
INNER JOIN profesorgrupoasignatura pga
on p.idProfesor = pga.id_profesor
INNER JOIN grupos g
ON g.idGrupos = pga.id_grupo
INNER JOIN asignatura a
ON a.idAsignatura = pga.id_asignatura
INNER JOIN alumno al
ON al.id_grupo = g.idGrupos
AND p.nombreProfesor = '$nombre' AND p.apellidosProfesor = '$apellidos'");

$result = $conexionDatos -> query($sql);

if($result){

    while($temp = $result->fetch_assoc()){
        $container[] = $temp;
    }

    echo json_encode($container);

}else{
    echo $conexionDatos->error;
}