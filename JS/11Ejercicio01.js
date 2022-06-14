'use strict';

/*
Programa que pide 2 numero y nos dice dual es mayor, el menor y si son iguales

PLUS : Evaluar que los 2 números solicitados sean mayres que cero y que sean números
*/

var numero1 = parseInt(prompt('Introduce el 1er número',0));
var numero2 = parseInt(prompt('introduce el 2do número',0));

// Este es el PLUS ----------
while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
  numero1 = parseInt(prompt('Introduce el 1er número',0));
  numero2 = parseInt(prompt('introduce el 2do número',0)); 
}

console.log(numero1,numero2);
if(numero1 == numero2){
  alert('Los números son iguales');
}else if(numero1 > numero2){
  alert('el número mayor es: ' + numero1 + ' el número menor es: ' + numero2);  
}else if(numero2 > numero1){
  alert('el número mayor es: ' + numero2 + ' el número menor es: ' + numero1);
}else{
  alert('Introduce números correctos')
}

