'user strict'

console.log('switch');

var edad = 75;
var imprime = '';


switch(edad) {
  case 18:
    imprime = 'acabas de cumplir la mayoría de edad';
  break;
  case 25:
    imprime = 'ya eres un adulto';
  break;
  case 40:
    imprime = 'crisis de los 40';
  break;
  case 75:
    imprime = 'eres un anciano';
  break;
  default:
    imprime = 'No encontre tu edad';
  break;
}


console.log(imprime);

