'use strict'

/*
Utilizar un bucle y mostrar la suma y la media de los número
hasta introducir un número negativo 
*/

var suma = 0;
var contador = 0;

do{
  var numero = parseInt(prompt('introduce numeros hasta que un negativo : ',0));

  if(isNaN(numero)){
    numero = 0;
  }else if(numero >= 0){
    suma = suma + numero; // suma += numero;
    contador ++;
  }

  console.log('suma = '+ suma + ' contador = ' + contador);

}while(numero >= 0)

alert('la suma es : ' + suma + '  y la media es : ' + (suma/contador));
