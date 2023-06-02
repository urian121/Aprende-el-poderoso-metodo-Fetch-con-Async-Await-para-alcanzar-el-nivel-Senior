/**
 * API para obtener dias festivos de Colombia para el año 2023
 */
const URL_API =
  "https://api.generadordni.es/v2/holidays/holidays?country=CO&year=2023";

document.addEventListener("DOMContentLoaded", obtenerDataAPI);

/**
 * Usando Promesas con el métod Fetch
 */
function obtenerDataAPI() {
  fetch(URL_API)
    .then((respuesta) => respuesta.json())
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));
}

/**
 * Usando Async/Await
 */
async function obtenerDataAPI() {
  //El await espera hasta que se resuleva dicha solicitud a la API, no avanzara hasta obtener una respuesta de la API
  const respuesta = await fetch(URL_API);
  const resultado = await respuesta.json();
  console.log(resultado);
}

/**
 * Usando try/catch y Async/await la mejor forma para el metodo fecth
 * Se usa el try/catch para menerar el error
 */
async function obtenerDataAPI() {
  try {
    const respuesta = await fetch(URL_API);
    const resultado = await respuesta.json();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}
