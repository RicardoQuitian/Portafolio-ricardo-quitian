/*
 * Portafolio de Ricardo Alexander Quitian León
 * Copyright © 2025
 * Este código está protegido por derechos de autor.
 * Prohibida su copia, distribución o modificación sin autorización.
 * Contacto: correo@ejemplo.com
 */

document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("modo-tron");
  if (savedMode === "red") {
    document.body.classList.remove("mode-blue");
    document.body.classList.add("mode-red");
  }
  setupMouse();
  revealOnScroll();
});


window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}


function toggleCerts(tipo) {
  const el = document.getElementById(`${tipo}Certs`);
  if (el) el.classList.toggle("hidden");
}


function toggleDisc() {
  const disco = document.querySelector(".disc");
  const body = document.body;

  disco.classList.toggle("paused");
  const isRed = body.classList.contains("mode-red");

  if (disco.classList.contains("paused")) {
    body.classList.toggle("mode-red", !isRed);
    body.classList.toggle("mode-blue", isRed);
    localStorage.setItem("modo-tron", body.classList.contains("mode-red") ? "red" : "blue");
  }

  document.querySelectorAll(".spark").forEach(s => {
    s.style.animation = "none";
    s.offsetHeight;
    s.style.animation = "";
  });
}


function setupMouse() {
  const light = document.querySelector(".mouse-light");
  document.addEventListener("mousemove", e => {
    light.style.left = `${e.clientX - 50}px`;
    light.style.top = `${e.clientY - 50}px`;
    if (document.body.classList.contains("mode-red")) {
      light.style.background = "radial-gradient(circle, #ff0040aa, transparent 70%)";
    } else {
      light.style.background = "radial-gradient(circle, #00f6ffaa, transparent 70%)";
    }
  });
}

function toggleMenu() {
  document.querySelector('.nav').classList.toggle('show');
}
