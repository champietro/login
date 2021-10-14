let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let usuario: string = String(usuario.value);
  let password: string = String(password.value);

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
