'use strict'

/*
Hacer un programa que acepte 2 número y muestre todos los números enteros que existen entre ambos
*/

var n1 = 0;
var n2 = 0;
var inferior = 0;
var superior = 0;

n1 = parseInt(prompt('introduce un 1er numero : ',0));
n2 = parseInt(prompt('introduce un 2do numero : ',0));


if(n1 < n2){
  inferior = n1;
  superior = n2;
  alert('A. inferior = ' + inferior + '  superior = ' + superior);
}else if(n1 > n2){
  inferior = n2;
  superior = n1;
  alert('B. inferior = ' + inferior + '  superior = ' + superior);
}else{
  inferior = n1;
  superior = n1;
  alert('C. inferior = ' + inferior + '  superior = ' + superior + '  son IGUALES');
}

/*
do{
  inferior + 1;
  console.log('inferior = ' + inferior + '  superior = ' + superior);
}while(inferior == superior);
*/
/*
while (inferior >= superior){
  inferior + 1;
  console.log('inferior = ' + inferior + '  superior = ' + superior);
  //debugger;
}
*/


document.write('<H2> Del numero ' + inferior + ' al ' + superior + ' estan los siguientes números : </H2>')
for (var i = inferior; i <= superior; i++){
  console.log('números : ' + i);
  document.write( i + '</br>')
}
