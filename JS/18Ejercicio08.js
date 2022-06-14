'use strict'

/*
Hacer una calculadora
- Acepte 2 numero (validos o que vuelva a pedir)
- Que multiplique, sume, reste y divida las 2 cifras por pantalla.
*/

var n1 = parseInt(prompt('Ingresa el primer número : ',1));
var n2 = parseInt(prompt('Ingresa el segundo número : ',1));


while((n1<0) || (n2<0) || isNaN(n1) || isNaN(n2)){
  n1 = parseInt(prompt('Ingresa el primer número : ',1));
  n2 = parseInt(prompt('Ingresa el segundo número : ',1));
}

var rSuma = 'la suma de los 2 número es: ' + n1 + ' + ' + n2 + ' = ' + (n1+n2);
var rMult = 'la multiplicación de los 2 número es: ' + n1 + ' x ' + n2 + ' = ' + (n1*n2);
var rResta = 'la resta de los 2 número es: ' + n1 + ' - ' + n2 + ' = ' + (n1-n2);
var rDiv = 'la división de los 2 número es: ' + n1 + ' / ' + n2 + ' = ' + (n1/n2);

var resultado1 = rSuma + '<br/>' + rMult + '<br/>' + rResta + '<br/>' + rDiv  + '<br/>';
var resultado2 = rSuma + '\n' + rMult + '\n' + rResta + '\n' + rDiv  + '\n';

document.write(resultado1);
alert (resultado2);