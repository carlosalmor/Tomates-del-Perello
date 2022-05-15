<?php

$nombre=$_POST['nombre'];
$email=$_POST['email'];
$telefono=$_POST['telefono'];
$color=$_POST['color'];
$talla=$_POST['talla'];
$mensaje=$_POST['mensaje'];

$para='perellonline@gmail.com';
$titulo='Consulta desde la web';
$header='From:'.$email;

$msjCorreo="Nombre:$nombre Email:$email Contacto:$telefono Verdura:$color Caja:$talla Mensaje:$mensaje";
    
    if($_POST['submit']){
        if(mail($para, $titulo, $msjCorreo, $header)){
            echo"<script language='javascript'>
            alert('Mensaje enviado, muchas gracias');
            window.location.href='https://www.upv.es';
            </script>";}else{
            echo'Error en el envío';
        }
    }

?>


