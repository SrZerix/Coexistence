<?php

include 'conexionDatos.php';

global $conexionDatos;

$idProfesor = $_REQUEST["idProfesor"];

$idAsignatura = $_REQUEST["idAsignatura"];

$sql = ("SELECT a.denominacionAsignatura AS asignatura, p.nombreProfesor, p. apellidosProfesor
FROM asignatura a, profesor p
WHERE a.id = $idAsignatura AND p.id = $idProfesor
");

$result = $conexionDatos -> query($sql);

if($result){

    while($temp = $result->fetch_assoc()){
        $container[] = $temp;
    }

    echo json_encode($container);

}else{
    echo $conexionDatos->error;
}