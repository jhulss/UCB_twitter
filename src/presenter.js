
import verificar_datos from "./verificarDatos";

const titulo = document.querySelector("#titulo_post");
const detalle = document.querySelector("#detalle_post");
const form = document.querySelector("#post-form");
const div = document.querySelector("#post-div");
const titulo_oblig = document.querySelector("#")

let post = [];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(verificar_datos(titulo.value, titulo))

  div.innerHTML = "<p>" + titulo.value +  "<br>" + detalle.value + "</p>";
});


let notas = [];









