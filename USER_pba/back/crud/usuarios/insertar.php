<?php
header( "Access-Control-Allow-Origin: http://localhost:3000" );

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "usuarios";

$Nombre 	= $_POST[ "Nombre" ];
$CorreoE    = $_POST[ "CorreoE" ];
$CelularNum = $_POST[ "CelularNum" ];

$conn = mysqli_connect( $db_host, $db_user, $db_pass, $db_name );
if( ! $conn ) { die( "DB Connection failed..!" ); }

$query = "INSERT INTO users VALUES( NULL, '$Nombre', '$CorreoE', '$CelularNum' )";
$query_result = mysqli_query( $conn, $query );

$json_data = [
    "result" => $query_result,
	"status" => "New record created",
    "usuario" => $Nombre,
    "correo" => $CorreoE,
    "CelularNum" => $CelularNum
];

echo json_encode( $json_data );
?>