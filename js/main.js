
document.addEventListener("DOMContentLoaded", () => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#888" },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: 2 },
      move: { enable: true, speed: 0.5 }
    },
    interactivity: {
      events: { onhover: { enable: true, mode: "repulse" } }
    },
    retina_detect: true
  });

  const umbral = document.getElementById("umbral");
  const cenizas = document.getElementById("cenizas");
  const fuego = document.getElementById("fuego");
  const renacer = document.getElementById("renacer");

  document.querySelector(".simbolo-fenix").addEventListener("click", () => {
    umbral.classList.remove("activa");
    cenizas.classList.add("activa");
  });

  document.getElementById("sigiloFuego").addEventListener("click", () => {
    cenizas.classList.remove("activa");
    fuego.classList.add("activa");
  });

  document.getElementById("sigiloRenacer").addEventListener("click", () => {
    fuego.classList.remove("activa");
    renacer.classList.add("activa");
  });
});
