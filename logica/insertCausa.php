<?php

include 'conexionConvi.php';

global $conexionConvi;

$causa = $_REQUEST["causa"];

$tabla = $_REQUEST["tabla"];

$sql = "INSERT $tabla VALUES (null,'$causa')";

$result = $conexionConvi -> query($sql);

if(!$result){

    echo $conexionConvi->error;

}