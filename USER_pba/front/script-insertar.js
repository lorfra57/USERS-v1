var formUI = document.getElementsByTagName( "form" )[ 0 ];
var inputsUI = formUI.getElementsByTagName( "input" );
var inputNombre= inputsUI[ 0 ];
var inputCorreoE = inputsUI[ 1 ];
var inputCelularNum = inputsUI[ 2 ];
// var inputSubmit = inputsUI[ 3 ];
var recordInsert = document.getElementById( "recordInsert" );

var dataNombre = " ";
var dataCorreoE = " ";
var dataCelularNum = " ";

recordInsert.addEventListener("click", function(e) {
    e.preventDefault();

    var endpoint = "http://localhost:8080/crud/usuarios/insertar.php";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", endpoint, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("Nombre=" + inputNombre.value + "&CorreoE=" + inputCorreoE.value + "&CelularNum=" + inputCelularNum.value);

    xhr.addEventListener("load", function() {
        var dataJson = JSON.parse(xhr.responseText);
        //var dataJson = xhr.responseText;
        console.log(dataJson)})
    
        // if (dataJson.success) {
        //     // Limpiar el formulario
        //     formUI.reset();
        // } else {
        //     console.error("Error al insertar registro:", dataJson.message);
        // }
    });