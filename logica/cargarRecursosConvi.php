<?php

include 'conexionConvi.php';

global $conexionConvi;

$tabla = $_REQUEST["tabla"];

$sql = ("SELECT * FROM $tabla");

$result = $conexionConvi -> query($sql);

if($result){

    while($temp = $result->fetch_assoc()){
        $container[] = $temp;
    }

    echo json_encode($container);

}else{
    echo $conexion->error;
}