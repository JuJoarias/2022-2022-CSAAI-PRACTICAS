console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const go = document.getElementById("go");
const reset = document.getElementById("reset");
const velocidad = document.getElementById("velocidad");
const angulo = document.getElementById("angulo");
const ang_disp = document.getElementById("angulo_disp");
const vel_disp = document.getElementById("vel_disp");
const display = document.getElementById("display");
const flecha = document.getElementById("flecha");
const diana = document.getElementById("diana");
const arco = document.getElementById("arco");

let tiro = false;



velocidad.oninput = () => {
    vel_disp.innerHTML = velocidad.value;
}

angulo.oninput = () => {
    ang_disp.innerHTML = angulo.value;
}

//-- Definir el tamaño del canvas
canvas.width = 800;
canvas.height = 400;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del projectil 
let x = 5;
let y = 88; 

// objetivo 
function getRandomX0(min, max) {
  return Math.random() * (max - min) + min;
}
let xomin = 200;
let xomax = 770;
let xo = getRandomX0(xomin, xomax); //getRandomXO(xomin,xomax);
let yo = 100;

//-- Velocidades del objeto
const crono = new Crono(display);


let vel = 0;
velocidad.value = 0;
angulo.value= 0;
let t = 0;
let g = 9.8;
let angle = 0;
let tiempo = false;

go.onclick = () => {
  crono.start();
  tiempo = true;
  tiro = true;
}

reset.onclick = () => {
  //location.reload();
  x = 5;
  y = 88;
  t = 0;
  vel = 0;
  angle = 0;
  tiempo = false;
  crono.reset();
  tiro = false;
}

function dibujarP(x,y){
  ctx.beginPath();
  ctx.drawImage(flecha,x, canvas.height -y, 50, 50);

  //-- Rellenar
  ctx.fill();

  //-- Dibujar el trazo
  ctx.stroke();
  ctx.closePath();
}

function dibujarO(x,y){
  ctx.beginPath();
  ctx.drawImage(diana,x,canvas.height -y, 70, 70);
  ctx.drawImage(arco,0,canvas.height -y, 65, 65);
 
  //-- Dibujar el relleno
  ctx.fill();    

  //-- Dibujar el trazo
  ctx.stroke();

  ctx.closePath();
}

dibujarO(xo,yo);
dibujarP(x,y);

function range(start, stop=undefined, step=1) {
  const startArray = stop  === undefined ? 0 : start;
  const stopArray = stop  === undefined ? start : stop;
  return Array.from({ length: (stopArray - startArray) / step + 1}, (_, i) => startArray + (i * step));
}

//-- Función principal de animación
function lanzar() {
  //-- Actualizar la posición velocidad
  vx = vel * Math.cos((angle * Math.PI) / 180);
  vy = vel * Math.sin((angle * Math.PI) / 180);
  
  x = x + vx * t;
  y = y + vy * t - 0.5 * g * t * t;

  //-- Algoritmo de animacion:
  //-- 1) Actualizar posición del  elemento
  //-- (física del movimiento rectilineo uniforme)
  if (tiempo){
    vel = velocidad.value*0.123;
    angle = angulo.value;
    t += 0.04;

  }else {
    crono.stop();
    vel = 0;
    t = 0;
  }

   //-- Condición de rebote en extremos verticales del canvas
  if (y <= 80 && tiro) { 
    vel = 0;
    t = 0;
    tiempo = false; 
    tiro = false;
    alert('Has fallado, intenta de nuevo');
  } // ajustar los rangos de colision
  if (range(Math.round(xo) -40, Math.round(xo) + 25).includes(Math.round(x)) && range(yo-35, yo+30).includes(Math.round(y)) && tiro){
    vel = 0;
    t = 0;
    tiempo = false;
    alert('HAS GANADO!!!');
    tiro = false; 
    //location.reload();
  }
  
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  dibujarO(xo,yo); 
  dibujarP(x,y);
  //-- 4) repetir
  requestAnimationFrame(lanzar);
}
lanzar();