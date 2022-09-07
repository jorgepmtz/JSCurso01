'use strict';
/*
Programa que:
1. pida 6 números por pantalla y los meta en un array
2. Mostrar el array en documento y consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Buscar un valor introducido por el usuario que nos diga si existe y su indice.
*/

// -------- UNO . Pida 6 números -------------

var num6 =  new Array(); 
var i = 0;

do {
  i++;
  var num = parseInt(prompt('Numero ' + i, 0));
  num6.push(num);
} while (i <= 5);


// -------- DOS . mostrar array en consola y en documento -------------

console.log('-------- Array por consola -------- : ');
console.log(num6);


document.write('--------Array por la página ++++++++-------');

document.write('<h1>Lista de números</h1>');
document.write('<ul>');
for (let n in num6){
  document.write('<li>'+parseInt(num6[n])+'</li>');  
};
document.write('</ul>');

// -------- TRES. Ordenar y mostrar el array -----------

var num6Sort = num6.sort();
console.log('El nuevo array ordenado con .sort');
console.log(num6Sort);

document.write('--------Array ORDENADO por la página ++++++++-------');

document.write('<h1>Lista de números Ordenados</h1>');
document.write('<ul>');
for (let ns in num6Sort){
  document.write('<li>'+parseInt(num6Sort[ns])+'</li>');
};
document.write('</ul>');

// ----------- INVERTIR el orden y mostrarlo ---------------


document.write('--------Array ORDEN INVERSO por la página ++++++++-------');

num6Sort.reverse();
document.write('<h1>Lista de números Ordenados de forma inversa</h1>');
document.write('<ul>');
for (let ns in num6Sort){
  document.write('<li>'+ ns + ' : ' +parseInt(num6Sort[ns])+'</li>');
};
document.write('</ul>');

document.write('--------Número de elemento que tiene el array por la página ++++++++-------');

var totalElementos = num6Sort.length;

document.write( '</br> Numero de elementos = '  + parseInt(totalElementos));

// -------- elegir un valor y presentar -----------------

document.write('</br> </br></br> </br>-------- Selección de elemento en array, su valor y su indice  ++++++++-------');

do{
  var numSeleccion = prompt('¿QUE NÚMERO DEL ARRAY BUSCAS? entre 0 y '+ parseInt(totalElementos-1),0);
  document.write( '</br> numSeleccion : '+ numSeleccion);
  document.write( ' -- totalElementos-1 : '+ (totalElementos-1));
}while(numSeleccion <= 0 || numSeleccion > (totalElementos-1));


const valorEnArray = function(indice, arreglo){
  return arreglo[indice];
};

document.write(' </=> </br> El valos buscado es '+ (valorEnArray(numSeleccion,num6Sort)));


document.write('</b');


