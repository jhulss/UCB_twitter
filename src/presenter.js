import sumar from "./sumador";

const titulo = document.querySelector("#titulo_post");
const detalle = document.querySelector("#detalle_post");
const form = document.querySelector("#post-form");
const div = document.querySelector("#post-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();


  div.innerHTML = "<p>" + titulo.value +  "<br>" + detalle.value + "</p>";
});
