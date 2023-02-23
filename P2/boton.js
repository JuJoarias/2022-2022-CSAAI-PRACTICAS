console.log("Ejecutnado JS...");

//-- Obtener el párrafo
const boton = document.getElementById('boton');

//-- Funcion de retrollamada de la pulsación del párrafo
boton.onclick = () => {
    console.log("Has pulsado el boton!");
}