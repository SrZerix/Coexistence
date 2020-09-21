<?php

include 'conexionConvi.php';

include 'conexionDatos.php';

global $conexionConvi;

global $conexionDatos;

$idAlumno = $_REQUEST["idAlumno"];

$idProfesor = $_REQUEST["idProfesor"];

$idAsignatura = $_REQUEST["idAsignatura"];

$fecha = $_REQUEST["fecha"];

$idCausa = $_REQUEST["idCausa"];


$sql = "INSERT expulsion VALUES (null,$idAlumno,$idProfesor,$idAsignatura,'$fecha',$idCausa,null,null,0)";

$result = $conexionConvi -> query($sql);

if(!$result){

    echo $conexionConvi->error;
    
}else{

$sql2 = ("SELECT a.denominacionAsignatura AS asignatura, p.nombreProfesor, al.nombreAlumno AS alumno
FROM asignatura a, profesor p, alumno al
WHERE a.id = $idAsignatura AND p.id = $idProfesor AND al.id = $idAlumno
");

$result2 = $conexionDatos -> query($sql2);

if($result2){

    while($temp = $result2->fetch_assoc()){
        $container[] = $temp;
    }

}else{
    echo $conexionDatos->error;
}

$sql3 = ("SELECT denominacion FROM causamonestacion WHERE id = $idCausa");

$result3 = $conexionConvi -> query($sql3);

if($result3){

    while($temp2 = $result3->fetch_assoc()){
        $containerCausa[] = $temp2;
    }

}else{
    echo $conexionConvi->error;
}

$destinatario = "alansifree@gmail.com";

$titulo = "Un alumno ha sido expulsado.";

$mensaje = "El alumno ".$container[0]['alumno']." ha sido expulsado por el profesor ".$container[0]['nombreProfesor']." en la 
asignatura ".$container[0]['asignatura'].". El motivo de la expulsión ha sido: ".$containerCausa[0]['denominacion'].". A fecha de: ".$fecha.".";

mail($destinatario,$titulo,$mensaje);

}
