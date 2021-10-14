let btnEnv = document.getElementById("btnEnviar");
let usuario = document.getElementById("usuario");
let password = document.getElementById("password");

let usu = string;
let pass = string;

btnEnv.addEventListener("click", () => {
  if (usu === "Juan") {
    if (pass === "ClaveJuan") {
      console.log("Bienvenido");
    } else {
      console.log("Contraseña inválida");
    }
  } else {
    console.log("Usuario inválido");
  }
});
