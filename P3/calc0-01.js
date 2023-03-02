console.log("Ejecutando JS...");

//-- Estados permitidos de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3,
}


//-- Variable de estado
//-- Por defecto su valor será el del estado inicial
let estado = ESTADO.INIT;

function digito(ev)
{
    //-- Se ha recibido un dígito
    //-- Según en qué estado se encuentre la calculadora
    //-- se hará una cosa u otra

    //-- Si es el primer dígito, no lo añadimos,
    //-- sino que lo mostramos directamente en el display
    if (estado == ESTADO.INIT) {

        display.innerHTML = ev.target.value;

        //-- Pasar al siguiente estado
        estado = ESTADO.OP1;

    } else {
       
        //--En cualquier otro estado lo añadimos
        display.innerHTML += ev.target.value;

        //-- Y nos quedamos en el mismo estado
        //-- Ojo! Este ejemplo sólo implementa el primer
        //-- estado del diagrama. Habría que tener en 
        //-- cuenta el resto... lo debes hacer en tu práctica
    } 
    
}

//-- Elementos de la interfaz de la calculadora
display = document.getElementById("display")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//-- Establecer la misma función de retrollamada
//-- para todos los botones de tipo dígito

digitos = document.getElementsByClassName("digito")

for (let boton of digitos) {

    //-- Se ejecuta cuando se pulsa un boton
    //-- que es un dígito
    boton.onclick = digito;
}

operaciones = document.getElementsByClassName("operaciones")

for (let operar of operaciones) {

    //-- Se ejecuta cuando se pulsa un boton
    //-- que es una operacion
    operar.onclick = digito;
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
}