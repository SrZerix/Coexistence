<?php

include 'conexionConvi.php';

global $conexionConvi;

$idAlumno = $_REQUEST["idAlumno"];

$sql = ("SELECT ca.denominacion as causa, mo.id_alumno, mo.id_profesor, mo.id_asignatura, 
mo.fecha, mo.fechaJefatura, mo.id_sancion, mo.control
FROM expulsion mo, causaexpulsion ca
WHERE mo.id_alumno = $idAlumno AND mo.id_causaExpulsion = ca.id");

$result = $conexionConvi -> query($sql);

if($result){

    while($temp = $result->fetch_assoc()){
        $container[] = $temp;
    }
    echo json_encode($container);

}else{
    echo $conexionConvi->error;
}

