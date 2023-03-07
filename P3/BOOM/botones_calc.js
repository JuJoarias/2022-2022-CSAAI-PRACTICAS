const ESTADO = {
    INIT: 0,
    OP1: 1,
}

let estado = ESTADO.INIT;

function digito(ev)
{
    if (estado == ESTADO.INIT) {

        display.innerHTML = ev.target.value;

        estado = ESTADO.OP1;
    } else {       
        display.innerHTML += ev.target.value;
    } 
    
}

display = document.getElementById("display_nsecreto")
digitos = document.getElementsByClassName("digito")

for (let boton of digitos) {
    boton.onclick = digito;
}



// Cronometro
//-- Elementos de la gui
const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset")
}

console.log("Ejecuitando JS...");

//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//---- Configurar las funciones de retrollamada

//-- Arranque del cronometro
gui.start.onclick = () => {
    console.log("Start!!");
    crono.start();
}
  
//-- Detener el cronómetro
gui.stop.onclick = () => {
    console.log("Stop!");
    crono.stop();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
    console.log("Reset!");
    crono.reset();
    display.innerHTML = '****'
    estado = ESTADO.INIT
}