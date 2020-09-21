<?php

include 'conexionConvi.php';

global $conexionConvi;

$idAlumno = $_REQUEST["idAlumno"];

$sql = ("SELECT ca.denominacion as causa, mo.id_alumno, mo.id_profesor, mo.id_asignatura, mo.fecha, mo.fechaJefatura, id_sancion
FROM amonestacion mo, causamonestacion ca
WHERE mo.id_alumno = $idAlumno AND mo.id_causaAmonestacion = ca.id");

$result = $conexionConvi -> query($sql);

if($result){

    while($temp = $result->fetch_assoc()){
        $container[] = $temp;
    }
    echo json_encode($container);

}else{
    echo $conexionConvi->error;
}

