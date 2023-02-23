console.log("Ejecutnado JS...");

//-- Obtener el párrafo
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const texto = document.getElementById('texto');


//-- Funcion de retrollamada de la pulsación del párrafo
boton1.onclick = () => {
    console.log("Has pulsado el boton1!");
}

boton2.onclick = () => {
    console.log("Has pulsado el boton2!");
}

texto.onclick = () => {
    console.log("Has pulsado el texto!");
    texto.innerHTML+=" click"
    
}