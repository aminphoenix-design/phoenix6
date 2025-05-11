// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const simbolo = document.querySelector(".simbolo-fenix");
  const umbral = document.getElementById("umbral");
  const cenizas = document.getElementById("cenizas");

  simbolo.addEventListener("click", () => {
    // Transición a siguiente pantalla
    umbral.classList.remove("activa");
    cenizas.classList.add("activa");
  });
});
