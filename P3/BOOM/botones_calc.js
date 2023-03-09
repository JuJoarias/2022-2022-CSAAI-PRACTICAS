numero_secreto = [1, 2, 3, 4];

const ESTADO = {
    INIT: 0,
    OP1: 1,
}

let estado = ESTADO.INIT;

function digito(ev)
{
    if (estado == ESTADO.INIT) {
        
        estado = ESTADO.OP1;
    } else {   
        crono.start();
        for (i=0; i<numero_secreto.length;i++){
            numeros(ev);
            
            }
        }    
} 


display1 = document.getElementById("display_nsecreto1")
display2 = document.getElementById("display_nsecreto2")
display3 = document.getElementById("display_nsecreto3")
display4 = document.getElementById("display_nsecreto4")

digitos = document.getElementsByClassName("digito")

for (let boton of digitos) {
    boton.onclick = digito;
}

function numeros(ev){
    if (numero_secreto[i]== parseInt(ev.target.value)){
        var aciertos = [];
        console.log(aciertos)
        if (i == 0){
            numero_secreto.splice(i,1);
            display1.innerHTML = ev.target.value;
            aciertos.push(numero_secreto[i]);
        }
        if (i == 1){
            numero_secreto.splice(i,1);
            display2.innerHTML = ev.target.value;
            aciertos.push(numero_secreto[i]);
        }
        if (i == 2){
            numero_secreto.splice(i,1);
            display3.innerHTML = ev.target.value;
            aciertos.push(numero_secreto[i]);
        }
        if (i == 3){
            numero_secreto.splice(i,1);
            display4.innerHTML = ev.target.value;
            aciertos.push(numero_secreto[i]);
        }
        if(aciertos.length == 4){
            crono.stop();
        }
    }
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
    estado = ESTADO.OP1
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
    display1.innerHTML = '*';
    display2.innerHTML = '*';
    display3.innerHTML = '*';
    display4.innerHTML = '*';
    contador = 0;
    estado = ESTADO.INIT
}