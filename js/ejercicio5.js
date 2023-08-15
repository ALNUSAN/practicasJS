/**Ejercicio 5: Mensajes personalizados
Crea una función llamada mostrarMensaje que tome un parámetro nombre. Dentro de la función, utiliza alert() para mostrar: "¡Hola, [nombre]! Espero que estés disfrutando de JavaScript." Pide al usuario su nombre utilizando prompt() y llama a la función.
(onclick) en el html */
let userName = "";

function ingresaNombre() {
  userName = prompt("Ingresa tu Nombre");
  alert("Hola" + userName + " Espero que estes disfrutando de Javascript");
}
