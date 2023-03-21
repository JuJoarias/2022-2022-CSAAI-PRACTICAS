console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const go = document.getElementById("go");
const reset = document.getElementById("reset");
const velocidad = document.getElementById("velocidad");
const angulo = document.getElementById("angulo");
const ang_disp = document.getElementById("angulo_disp");
const vel_disp = document.getElementById("vel_disp");

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
let y = canvas.height - 20;

//-- Velocidades del objeto

let velx = 0;
let t = 0;
let g = 9.8;
let angle = 0;

go.onclick = () => {
    velx = velocidad.value;
    angle = angulo.value
    update(); 
    console.log(velx)
}

reset.onclick = () => {
    x = 0;
    y = canvas.height - 20;
    velx = 0;
    update();
}

//-- Función principal de animación
function update() 
{
  
  
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posición del  elemento
  //-- (física del movimiento rectilineo uniforme)

   //-- Condición de rebote en extremos verticales del canvas
   if (x < 0 || x >= (canvas.width - 50) ) {
    velx = -velx;
  }

  //-- Actualizar la posición velocidad
  x = x + velx*0.1 * Math.cos(angle * Math.PI / 180) * t;
  y = y + velx*0.1 * Math.sin(angle * Math.PI / 180) * t - 0.5 * g * t * t;
  t += 0.1;
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, y, 20, 20);

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