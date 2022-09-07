'use strict';


// Eventos del ratón


function cambiarColor() {
  var bg = btn.style.background;
  console.log('Me has dado click');
  console.log(btn.style.background);
  if(bg == 'green'){
    btn.style.background = 'red';
    btn.style.padding = '10px'
  }else {
    btn.style.background =  'green';
    btn.style.padding = '15px' 
  }
  return true;
}

var btn = document.querySelector('#btnEventos');

// Evento : click
btn.addEventListener('click',function(){
  cambiarColor();
}); 

// Evento : mosuseover

