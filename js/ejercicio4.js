/**Ejercicio 4: Verificación de contraseña
Solicita al usuario ingresar una contraseña utilizando prompt("Ingresa tu contraseña"). Si la contraseña es "secreto123", muestra un mensaje de acceso concedido con alert(). De lo contrario, muestra un mensaje de acceso denegado. */

let password = prompt("Ingresa Tu contraseña");

if (password === null || password === "") {
  alert(" No has ingresado datos");
} else {
  if (password === "alfa") {
    alert("Acceso concedido");
  } else {
    alert(" Clave incorrecta: Acceso denegado");
  }
}
