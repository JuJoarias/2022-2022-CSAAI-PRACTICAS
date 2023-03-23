console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const go = document.getElementById("go");
const reset = document.getElementById("reset");
const velocidad = document.getElementById("velocidad");
const angulo = document.getElementById("angulo");
const ang_disp = document.getElementById("angulo_disp");
const vel_disp = document.getElementById("vel_disp");
const display = document.getElementById("display");

velocidad.oninput = () => {
    vel_disp.innerHTML = velocidad.value;
}

angulo.oninput = () => {
    ang_disp.innerHTML = angulo.value;
}

//-- Definir el tamaño del canvas
canvas.width = 500;
canvas.height = 300;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x = 0;
let y = 21;

//-- Velocidades del objeto
const crono = new Crono(display);

let velx = 0;
let t = 0;
let g = 0;
let angle = 0;
let tiempo = false

go.onclick = () => {
  crono.start();
    velx = velocidad.value ;
    angle = angulo.value
    g = 9.8;
    tiempo = true
    console.log(velx)
    console.log(angle)
}

reset.onclick = () => {
    x = 0;
    t = 0;
    g = 0;
    tiempo = false;
    y = 21;
    velx = 0;
    crono.stop();
    crono.reset();
}

//-- Función principal de animación
function update() 
{
  
  
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posición del  elemento
  //-- (física del movimiento rectilineo uniforme)
  if (tiempo){
    console.log('probando')
    
    t += 0.04;
  }

   //-- Condición de rebote en extremos verticales del canvas
   if (y <= 25 && t != 5 ) {
    velx = 0;
    crono.stop();
    t = 0;
    tiempo = false;
    
  }

  //-- Actualizar la posición velocidad
  x = x + velx*0.1 * Math.cos(angle * Math.PI / 180) * t;
  y = y + velx * Math.sin(angle * Math.PI / 180) * t - 0.5 * g * t * t;
  
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, canvas.height -y, 20, 20);

    //-- Dibujar
    ctx.fillStyle = 'red';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

update();