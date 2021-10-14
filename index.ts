let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let v1m: number = Number(usuario.value);
  let v1s: number = Number(password.value);

if promedioS >= 60{ 
  promedioS = promedioS / 60;
  promedioM = promedioM + promedioS;
  promedioS = promedioS % 60;
}


  console.log("Bienvenido", horas, ":", minutos, ":", segundos);
  console.log("El tiempo promedio es: ,"promedioH, ":", promedioM, ":", promedioS);
});