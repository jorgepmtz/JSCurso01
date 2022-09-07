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

function mostrarArray(elementos, textoCustom=''){
  document.write('</br> <h1> Contenido del Array '+textoCustom+' </h1>');
  document.write('<ul>');
  numerox.forEach((elemento, index) =>{
    document.write('<li>' +index+ ' : ' + elemento + '</li>');
  });
  document.write('</ul>')
};

// -+-+-+-+-+-+ Pida ¿numeros? y enviar a la pantalla.
var numx = parseInt(prompt('De que tamaño será tu arreglo ???? ', 0)-1);
//var numerox = Array(numx);
var numerox = []; // OPCIÓN 2

for(var i=0; i<=numx; i++) {
  // numerox[i] = parseInt(prompt('Introduce el valor ' + i + ' de ' + numx));
  numerox.push(parseInt(prompt('Introduce el valor ' + i + ' de ' + numx)));  // OPCIÓN 2
};

// document.write ('numx  es : ' + numx + '</br>' );
// document.write ('numerox es : ' + numerox);
// console.log(numerox);

// Array en página ------
mostrarArray(numerox,'ORIGINAL');

// Ordenar y mostrar
var numeroxOrdenados = numerox.sort(function(a,b){return a-b}); // Para ordenar en forma númerica ------
mostrarArray(numeroxOrdenados, 'ORDENADOS');

// Invertir y mostrar
var numeroxOrdenadosInv = numeroxOrdenados.reverse();
mostrarArray(numeroxOrdenadosInv, ' INVERSO');

// Contar elementos
document.write('<h1> El array tiene '+numerox.length + ' elementos. </h1>');

// Busca un elemento en el array

var busqueda = parseInt(prompt('¿Que número buscas? : ', 0));
var posicion = numeroxOrdenadosInv.findIndex(elemento => elemento == busqueda);

console.log( 'Busqueda :'+ busqueda);
console.log( 'Posicion : '+ posicion);

if(posicion && posicion != -1){
  document.write('<hr/> </br> <h2> Número encontrado </h2>');
  document.write('<h3> elemento buscado : '+posicion+'</h3> </br> <hr/>');
}else{
  document.write('Número no encontrado');
};





