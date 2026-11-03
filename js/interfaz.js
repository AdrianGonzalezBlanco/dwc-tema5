export function mostrarMensaje(elemento, texto) {
  elemento.textContent = texto;
}

export function alternarDetalles(contenedor, boton) {
  const estaOculto = contenedor.classList.toggle("oculto");
  const expandido = !estaOculto;

  boton.setAttribute("aria-expanded", String(expandido));
  boton.textContent = expandido
    ? "Ocultar información"
    : "Mostrar más información";
}

function crearTarjeta(caracteristica) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  const categoria = document.createElement("span");
  categoria.classList.add("tarjeta__categoria");
  categoria.textContent = caracteristica.categoria;

  const nombre = document.createElement("h3");
  nombre.classList.add("tarjeta__nombre");
  nombre.textContent = caracteristica.nombre;

  const descripcion = document.createElement("p");
  descripcion.classList.add("tarjeta__descripcion");
  descripcion.textContent = caracteristica.descripcion;

  tarjeta.append(categoria, nombre, descripcion);
  return tarjeta;
}

export function renderizarCaracteristicas(contenedor, lista) {
  contenedor.replaceChildren();

  for (const caracteristica of lista) {
    contenedor.append(crearTarjeta(caracteristica));
  }
}

export function filtrarCaracteristicas(lista, termino) {
  const busqueda = termino.trim().toLowerCase();
  if (!busqueda) return lista;

  return lista.filter((c) => {
    const nombre = c.nombre.toLowerCase();
    const descripcion = c.descripcion.toLowerCase();
    return nombre.includes(busqueda) || descripcion.includes(busqueda);
  });
}

export function mostrarSinResultados(elemento, visible) {
  elemento.classList.toggle("oculto", !visible);
}
