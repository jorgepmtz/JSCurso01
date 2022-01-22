'use strict'

// Prueba con VAR
var numero = 400;
console.log(numero);  // igual a 400

if(true){
  var numero = 500;
  console.log(numero);  // igual a 500
}
console.log(numero);  // igual a 500 --- cambio global por usar var

// Prueba con LET
var texto = 'usando var';
console.log(texto); // usando var

if(true) {
  let texto = 'usando let'
  console.log(texto);   // usando let --- es solo para el bloque.
}
console.log(texto); // mantiene usando var --- se mantiene var por ser global.

