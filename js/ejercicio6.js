/**Ejercicio 6: Decisión de beca
Solicita al usuario datos personales como el nombre la edad y su pais tambien su departamento, el programa debe otorgar becas academicas a personas que solo sean de toronto canada, mayores de 18 */

let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");
let pais = prompt("Ingresa tu país");
let departamento = prompt("Ingresa el Departamento");

if (
    nombre === null ||
    nombre === "" ||
    edad === null ||
    edad === "" ||
    pais === null ||
    pais === "" ||
    departamento === null ||
    departamento === ""
) {
    alert("Datos no validos")
    
} else {
nombre = nombre.toLowerCase();
edad = edad.toLowerCase();
pais = pais.toLowerCase();
departamento = departamento.toLowerCase();
if (pais ==="canada" || pais ==="canadá" && departamento === "toronto" && edad >= 18) {
    alert("Se te ha otorgado una beca")
    
} else {
    alert("No cumples los requisitos para la beca")
}

    
}