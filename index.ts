let btnEnv = document.getElementById("btnEnviar");
let usuario: string = document.getElementById("usuario");
let password: string = document.getElementById("password");

btnEnv.addEventListener("click", () => {
  let usuario: usuario.value;
  let password: password.value;

  console.log("usuario");
  console.log("password");

  if (usuario === "Juan") {
    if (password === "ClaveJuan") {
      console.log("Bienvenido");
    } else {
      console.log("Contraseña inválida");
    }
  } else {
    console.log("Usuario inválido");
  }
});
