<?php

include 'conexionDatos.php';

global $conexionDatos;

$tabla = $_REQUEST["tabla"];

$sql = ("SELECT * FROM $tabla");

$result = $conexionDatos -> query($sql);

if($result){

    while($temp = $result->fetch_assoc()){
        $container[] = $temp;
    }

    echo json_encode($container);

}else{
    echo $conexion->error;
}