numero_secreto = [];

function num_sec(){
    for (x=0; x<4;x++){
        numero = Math.floor(Math.random()*10);
        numero_secreto.push(numero);
    }
}

num_sec();
console.log('numero secreto',numero_secreto)
const ESTADO = {
    INIT: 0,
    OP1: 1,
}

let estado = ESTADO.INIT;

function digito(ev)
{
    if (estado == ESTADO.INIT) { 
        estado = ESTADO.OP1;
        digito(ev);
    } else {   
        if (numero_secreto.length != 0){
            crono.start();
        
            numeros(ev);
        }else{
            console.log('Ya has ganado, recarga la pagina o pulse reset')
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
var aciertos = [];
function numeros(ev){
    for (i=0; i<numero_secreto.length;i++){
        if (numero_secreto[i]== parseInt(ev.target.value)){
            
            if (i == 0){
                
                display1.innerHTML = ev.target.value;
                aciertos.push(numero_secreto[i]);
                numero_secreto[i] = 11;
                
            }
            
            if (i == 1){
                
                display2.innerHTML = ev.target.value;
                aciertos.push(numero_secreto[i]);
                numero_secreto[i] = 11;
    
            }

            if (i == 2){
                
                display3.innerHTML = ev.target.value;
                aciertos.push(numero_secreto[i]);
                numero_secreto[i] = 11;
                
            }

            if (i == 3){
        
                display4.innerHTML = ev.target.value;
                aciertos.push(numero_secreto[i]);
                
            }
            
            if(aciertos.length == 4){
                console.log('HAS GANADO!!!')
                crono.stop();
                aciertos = [];
                numero_secreto =[];
            }

            break;
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
    
    crono.start();
    estado = ESTADO.OP1
}
  
//-- Detener el cronómetro
gui.stop.onclick = () => {
    
    crono.stop();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
    
    crono.reset();
    display1.innerHTML = '*';
    display2.innerHTML = '*';
    display3.innerHTML = '*';
    display4.innerHTML = '*';
    estado = ESTADO.INIT
    num_sec();
    console.log('numero secreto',numero_secreto)
}