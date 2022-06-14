'use strict'

/*
Al ingresar un numero debe decir si es par o impar
*/

var numero = parseInt(prompt('Introduce cualquier numero : ',0));
// debugger;
while (isNaN(numero)){
  numero = parseInt(prompt('Introduce cualquier numero : ',0));
}  

if((numero % 2) == 0){
  alert('el numero : ' + numero + ' es un número PAR');
}else{
  alert('el número : ' + numero + ' es un número IMPAR');
}
