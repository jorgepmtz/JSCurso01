'use strict'

/*
Tabla de multiplicar de un número capturado 
*/

var numero = parseInt(prompt('Introduce el número de la tabla : ',1));

document.write('<H1>Esta es la tabla del ' + numero + ' </H1>');
for (var i = 1; i <= 10; i++ ){
  document.write(i + ' x ' + numero + ' = ' + i * numero + ' </br>');
}
