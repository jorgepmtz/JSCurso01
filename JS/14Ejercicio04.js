'use strict'

/*
Mostrar los números impares que hay entre 2 número introducidos:
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

document.write('<H2> Los número pares entre el numero ' + inferior + ' al ' + superior + ' son : </H2>');
// debugger;
for (var i = inferior; i <= superior; i++){
  
  if ((i % 2) != 0){
    console.log('números : ' + i);
    document.write( i + '</br>');
  }
  
}
