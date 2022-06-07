'use strict'

// do ... while sería
var years = 10;

do {
  console.log('Años es igual a : ' + years);
  years ++;

  // Usando break para forzar la salida del bucle
  if(years == 15){
    break;
  }
   // debugger;
} while (years <= 30);