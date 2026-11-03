# Radiografía: Chrome DevTools

Página informativa sobre **Chrome DevTools**, la herramienta de desarrollo
integrada en Google Chrome. Incluye una descripción de sus paneles principales,
una sección ampliable con información extra y un buscador interactivo de
características generadas dinámicamente con JavaScript.

## Estructura

- `index.html` — estructura semántica (header, main, footer).
- `css/estilos.css` — estilos visuales.
- `js/datos.js` — array de características.
- `js/interfaz.js` — funciones que manipulan el DOM.
- `js/main.js` — inicialización y registro de eventos.

## Cómo ejecutarlo en local

El proyecto usa **módulos ES**, por lo que **no funciona abriendo el archivo
directamente** (`file:///`). Hay que servirlo desde un servidor local.

### Opción 1: Live Server (VSCode)
1. Instala la extensión **Live Server**.
2. Clic derecho sobre `index.html` → *Open with Live Server*.

### Opción 2: Python
```bash
python -m http.server 8000
```
Después abre `http://localhost:8000/` en el navegador.

## Funcionalidades añadidas

- **Fase A:** el botón "Escribir mensaje" tiene dos manejadores de clic
  (`addEventListener`): uno escribe un mensaje visible en la página con
  `textContent` y otro lo registra en la consola.
- **Fase B:** el botón "Mostrar más información" muestra y oculta una sección
  con `classList.toggle` y mantiene sincronizados su texto y `aria-expanded`.
- **Fase C:** las características se definen en un array de objetos
  (`nombre`, `categoria`, `descripcion`) en `datos.js` y se generan como
  tarjetas con `createElement`, `textContent` y `append`.
- **Fase D:** un campo de búsqueda con etiqueta asociada filtra las tarjetas
  por nombre o descripción mientras se escribe, y muestra un mensaje cuando
  no hay coincidencias.

## Cliente y servidor

El servidor local solo entrega archivos estáticos: `index.html`, `css/estilos.css`
y los módulos `js/main.js`, `js/datos.js` y `js/interfaz.js`, todos con código 200.
El cliente (el navegador) pide primero el HTML y, al leerlo, pide el CSS y el
módulo principal, que a su vez importa los otros dos módulos. Todo lo
interactivo lo ejecuta el cliente: seleccionar elementos, registrar eventos,
generar las tarjetas y filtrarlas sin recargar. La carga se comprueba en la
pestaña Red de DevTools, donde aparecen las cinco peticiones con estado 200,
y en la consola, que no muestra errores.
