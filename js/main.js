import { caracteristicas } from "./datos.js";
import {
  mostrarMensaje,
  alternarDetalles,
  renderizarCaracteristicas,
  filtrarCaracteristicas,
  mostrarSinResultados
} from "./interfaz.js";

const botonMensaje = document.querySelector("#boton-mensaje");
const mensaje = document.querySelector("#mensaje");

const botonDetalles = document.querySelector("#boton-detalles");
const detallesContenido = document.querySelector("#detalles-contenido");

const buscador = document.querySelector("#buscador");
const lista = document.querySelector("#lista-caracteristicas");
const sinResultados = document.querySelector("#sin-resultados");

botonMensaje.addEventListener("click", () => {
  mostrarMensaje(mensaje, "Has pulsado el botón. Este mensaje se ha escrito con textContent.");
});

botonMensaje.addEventListener("click", () => {
  console.log("[boton-mensaje] Interacción registrada en consola");
});

botonDetalles.addEventListener("click", () => {
  alternarDetalles(detallesContenido, botonDetalles);
});

renderizarCaracteristicas(lista, caracteristicas);

buscador.addEventListener("input", () => {
  const filtradas = filtrarCaracteristicas(caracteristicas, buscador.value);
  renderizarCaracteristicas(lista, filtradas);
  mostrarSinResultados(sinResultados, filtradas.length === 0);
});
