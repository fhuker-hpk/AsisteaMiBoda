const eventoFecha = new Date("March 1, 2025 18:00:00").getTime();
const contador = document.getElementById("contador");

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = eventoFecha - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor(
    (diferencia % (1000 * 60 * 60)) / (1000 * 60)
  );

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;

  // Animaciones
  document.getElementById("dias").animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 500,
    fill: "forwards",
  });
  document.getElementById("horas").animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 500,
    fill: "forwards",
  });
  document.getElementById("minutos").animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 500,
    fill: "forwards",
  });
}

setInterval(actualizarContador, 1000);

document.getElementById("siguiente").addEventListener("click", () => {
  window.location.href = "confirmacion.html";
});
