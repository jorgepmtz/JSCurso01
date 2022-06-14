'use strict'

/*
Mostrar todos los números divisores de un numero introducido por un prompt
*/

var numero = parseInt(prompt('Introduce un número : ',1));

for(var i = 1; i <= numero; i++){
  if((numero % i) == 0 ){
    console.log('El divisores de tu numero ' + numero + '  es = ' + i);
  }
}
