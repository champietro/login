let btnEnv = document.getElementById("btnEnviar");
let usuario = document.getElementById("usuario");
let password = document.getElementById("password");

let u: string = usuario.value;
let p: string = password.value;

btnEnv.addEventListener("click", () => {
  if (u === "Juan") {
    if (p === "ClaveJuan") {
      console.log("Bienvenido");
    } else {
      console.log("Contraseña inválida");
    }
  } else {
    console.log("Usuario inválido");
  }
});
