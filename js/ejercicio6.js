/**Ejercicio 6: Decisión de beca
Solicita al usuario datos personales como el nombre la edad y su pais tambien su departamento, el programa debe otorgar becas academicas a personas que solo sean de toronto canada, mayores de 18 */

let nombre = prompt("Ingresa tu nombre").toLocaleLowerCase();
let edad = prompt("Ingresa tu edad").toLocaleLowerCase();
let pais = prompt("Ingresa tu país").toLocaleLowerCase();
let departamento = prompt("Ingresa el Departamento").toLocaleLowerCase();

if (pais ==="canada" || pais==="canadá" && departamento==="toronto" && edad>="18") {
    alert("Felicidades cumples las condiciones para la Beca")
    
} else {
    alert("No cumples las condiciones para la beca")
}