'use strict'
// --- ++++ Funciones anónimas - --- ++++ Funciones que no tiene nombre

var pelicula = function (nombre){
  return 'La película es :  '+ nombre;
}
// ---+++ En la consola tendría que escribir: pelicula('nom_pelicula') ----+++ 

//  --- +++ Funciones anónimas se generan cuando mando llamar la función sumame y creo 2 funciones sin nombre como parámetros 
// de la función, pero en la definición de la función sumame, configuro que va ha tener 2 parámetros sumameYmustra y sumaPorDos,
// que son parámetros, pero los llamo dentro de esta función como function.
function sumame(n1, n2, sumaYmuestra, sumaPorDos){
  var sumar = n1 + n2;
  sumaYmuestra(sumar);
  sumaPorDos(sumar);
  return sumar;
}

sumame (5,7,
  function(dato){
  console.log('la suma es : ', dato);
},function(dato){
  console.log('La suma por 2 es : ', (dato*2));
});

// --- ++++ Funciones FLECHA +++ ----- al mandar llamar la funcción sumame en lugar de definir functión solo defino 
// --- ++++ el dato con => y ejecuto lo que euiera dentro de la función, en este caso es un simple console.log, es muy
// ---- ++++ utilizado en JS y permite un código más limpio. JPM: Podrían considerarse funciones anónimas? 
// ---- ++++ Tal vez pero simplificadas, el resultado es le mismo.

function sumame(n1, n2, sumaYmuestra, sumaPorDos){
  var sumar = n1 + n2;
  sumaYmuestra(sumar);
  sumaPorDos(sumar);
  return sumar;
}

sumame (78,89,
  dato => {
  console.log('la suma es : ', dato);
},dato => {
  console.log('La suma por 2 es : ', (dato*2));
});




