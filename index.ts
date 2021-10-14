let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let usuario: number = Number(usuario.value);
  let password: number = Number(password.value);

if usuario === "Juan" { 
  if password === "ClaveJuan"{
    console.log("Bienvenido");
  }else{
    console.log("Contraseña inválida");
  }
}
else{
  console.log("Usuario inválido");
}
});