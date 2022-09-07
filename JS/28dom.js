'use strict'
// DOM - Document Object Model

// Función para cambia el color del fondo la usamos en la CONSOLA----------
function cambiaColor (clr){
  caja.style.background = clr;
}

// ------ +++++ Conseguir elementos con un ID específico ++++ ----- 

// var caja = document.getElementById('micaja');    // Opción 1: getElemetById
var caja = document.querySelector('#micaja');       // Opción 2: querySelector

console.log(caja.innerHTML);

caja.innerHTML = 'Texto desde JS';
console.log(caja.innerHTML);

// ---- Pueddo modificar colores y padding

caja.style.background = 'green';
caja.style.padding = '30px';
caja.style.color = 'white'; 
caja.className = 'micaja';

// var cajaEtiqueta = document.querySelector(micaja);      // Nombre de la etiqueta
// var cajaId = document.querySelector(#micaja);           // Id del elemento
// var cajaClase = document.querySelector(.micaja);        // Clase

// ----- ++++++ Conseguir elementos por sus etiquetas +++++++ ------ 
var todosLosDiv = document.getElementsByTagName('div');
console.log(todosLosDiv);

var contenidoTxt = todosLosDiv[2].textContent;
console.log(contenidoTxt);

// var contenidoEnTexto = todosLosDiv[2];
// contenidoEnTexto.innerHTML = 'Nuevo texto para la caja DOS';
// contenidoEnTexto.style.background = 'green';
// console.log(contenidoEnTexto);

todosLosDiv.array.forEach(element => {
  var parrafo = document.createElement('p');
  console.log(parrafo);
  var texto = document.createTextNode(element);
  console.log(texto);
  parrafo.appendChild(texto);
  document.querySelector('#misec').appendChild(parrafo);
});

// for (valor in todosLosDiv){
//   var parrafo = document.createElement('p');
//   var texto = document.createTextNode(valor);
//   parrafo.appendChild(texto);
//   document.querySelector('#miseccion').appendChild(parrafo);

// }





// ------ ++++++ Conseguir elementos por su Clase +++++ ------


