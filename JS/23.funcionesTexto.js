'use strict';
// transformación de textos

var numero = 444;
var texto1 = 'curso de JS de Víctor Robles';
var texto2 = 'buen curso';

var dato1 = numero.toString();  // convertimos numero a string
var dato2 = texto1.toUpperCase();
var dato3 = texto2.toLowerCase();

console.log(dato1);
console.log(typeof(dato1));
console.log('+++++++++---------+++++++');
console.log(dato2);
console.log(typeof(dato2));
console.log('+++++++++---------+++++++');
console.log(dato3);
console.log(typeof(dato3));
console.log('+++++++++---------+++++++');


// calcular longitud de un texto

var nombre = 'Jorge Peña';
var lista = ['Jorge Peña', 'Mikey Mouse', 'Pato Donald'];

console.log(nombre, nombre.length);
console.log(lista, lista.length);

// ---- ++++  Conactenar texto ---

var textoTotal = dato1 + ' ' + dato2 + ' ' + dato3;
console.log(textoTotal, textoTotal.length);

// ----- ++++++ BUSQUEDA de texto ----------

var txt1 = 'Por si no te vuelvo a ver te vuelvo a recordar';
var txt2 = '       Por si nos volvemos a encontrar     ';

var busqueda1 = txt1.indexOf('vuelvo');
console.log('Primer lugar donde se encuentra vuelvo : ', busqueda1);

var busqueda2 = txt1.lastIndexOf('vuelvo');
console.log('Último lugar donde se encuentra vuelvo : ', busqueda2);

var busqueda3 = txt1.search('vuelvo');
console.log('Encuentra lugar donde se encuentra vuelvo : ', busqueda3);

var busqueda4 = txt1.match(/vuelvo/g);
console.log('Match donde se encuentra vuelvo : ', busqueda4);

var busqueda5 = txt1.substr(10, 8);
console.log('Substr de 8 caracrteres a partir del caracter 10 : ', busqueda5);

var busqueda6 = txt1.includes('a ver');
console.log('Solo si encontró -a ver- : ', busqueda6);


// ---- ++++ Funciones de REEMPLAZO ----- ++++++++

var busqueda7 = txt1.replace('vuelvo', 'Revuelvo');     // NOTA: solo lo ejecuta la primer coincidencia
console.log('Solo reemplaza : ', busqueda7);

var busqueda8 = txt1.slice(10,18);
console.log('Solo rebana a partir del carcater 10 hasta el 18 : ', busqueda8);

var busqueda9 = txt1.split(' ');    // --- En este caso lo separé por espacios
console.log('Solo separa en un arreglo cada palabra porque le pedí por espacios : ', busqueda9);

var busqueda10 = txt2.trim(' ');    // --- En este caso quita los espacios de adelante y atras del texto
console.log('Quita lo espacios en blabco antes y despues de la variable de texto : ', busqueda10);

