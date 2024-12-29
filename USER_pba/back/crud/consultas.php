<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Content-Type: application/json'); // Importante: indica que la respuesta es JSON

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "usuarios";

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    die(json_encode(["error" => "Error de conexión: " . $conn->connect_error])); // Devuelve un error en formato JSON
}

$sql = "SELECT * FROM users";
$result = $conn->query($sql);

$data = []; // Array para almacenar los datos

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["id"]. "</td>";
        echo "<td>" . $row["Nombre"]. "</td>";
        echo "<td>" . $row["CorreoE"]. "</td>";
        echo "<td>" . $row["CelularNum"]. "</td>";
        echo "</tr>";
    }
} else {
    echo "<tr><td colspan='4'>0 resultados</td></tr>";
}

$conn->close();

echo json_encode($data); // Codifica el array a JSON y lo imprime
?>