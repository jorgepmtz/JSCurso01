'use strict';

// ---- +++++ Funciones +++++ ----- 

function porConsola (n1,n2) {
  console.log('suma '+ (n1+n2));
  console.log('resta '+ (n1-n2));
  console.log('mult '+ (n1*n2));
  console.log('div '+ (n1/n2));
}

function porPantalla (n1,n2) {
  document.write('suma '+ (n1+n2) + '<br/>');
  document.write('resta '+ (n1-n2)+ '<br/>');
  document.write('mult '+ (n1*n2) + '<br/>');
  document.write('div '+ (n1/n2)  + '<br/>');
}

function calculadora (num1, num2, mostrar = false){
  if(mostrar == false){
    porConsola(num1, num2);
  }else{
    porPantalla(num1, num2);
  }
  return true;
}


calculadora(2, 4);
calculadora(3, 20, true);
calculadora(8, 46, false);
calculadora(8234, 46, true);

