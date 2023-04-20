console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizador_r = document.getElementById('deslizador_rojo');
const deslizador_g = document.getElementById('deslizador_verde');

//-- Valor del deslizador
const range_value = document.getElementById('range_value');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavía
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};

let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);


//-- Función de retrollamada del deslizador
deslizador_r.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  range_value.innerHTML = deslizador_r.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavía
  ctx.drawImage(img, 0,0);

  var data = imgData.data

  //-- Obtener el umbral de rojo del deslizador
  umbral = deslizador_r.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral)
      data[i] = umbral;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

deslizador_g.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value_g.innerHTML = deslizador_g.value;
  
    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavía
    ctx.drawImage(img, 0,0);

    var data = imgData.data
  
    //-- Obtener el umbral de rojo del deslizador
    umbral2 = deslizador_g.value
  
    //-- Filtrar la imagen según el nuevo umbral
    for (let i = 0; i < data.length; i+=4) {
      if (data[i +1] > umbral2)
        data[i +1] = umbral2;
    }
  
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }

console.log("Fin...");
