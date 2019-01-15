// DECLARACION DE VARIABLES

const instagram = {
    seccion: document.getElementById("instagram"),
    enlace: document.getElementById("enlace-instagram") }

const pinterest = {
    seccion: document.getElementById("pinterest"),
    enlace: document.getElementById("enlace-pinterest") }

const movies = {
    seccion: document.getElementById("movies"),
    enlace: document.getElementById("enlace-movies") }

// DEFINIMOS LA PAGINA DE INICIO

var paginaActual = instagram;
instagram.enlace.style.color = "white";
pinterest.seccion.style.display = "none";
movies.seccion.style.display = "none";

// AÑADIMOS LOS EVENTOS PARA CADA SECCION

instagram.enlace.addEventListener("click", () => mostrarSeccion(instagram))
pinterest.enlace.addEventListener("click", () => mostrarSeccion(pinterest))
movies.enlace.addEventListener("click", () => mostrarSeccion(movies))

// MUESTRA UNA SECCION Y OCULTA LA ANTERIOR

function mostrarSeccion(paginaNueva) {
    paginaActual.seccion.style.display = "none";
    paginaNueva.seccion.style.display = "block";
    
    paginaActual.enlace.style.color = "#9a9d93";
    paginaNueva.enlace.style.color = "white";
    
    paginaActual = paginaNueva;
}