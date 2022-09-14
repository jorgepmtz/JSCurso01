'use strict';

// Para que el archivo script se ponga en el HEAD del HTML y no se ejecute hasta que todos los elementos del DOM en HTML
// esten cargados usamos el evento load : ponientdo todo el script 
// en window.addEventListener('load', () => { - todo mi js}); . El evento load se ejecuta hasta que toda la página este cargada.


window.addEventListener('load', () => {

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

  // Evento : mouseover
  btn.addEventListener('mouseover', function(){
  btn.style.background = 'yellow'
    console.log('evento mouseover');
  });

  // Evento : mouseout
  btn.addEventListener('mouseout', function(){
  btn.style.background = 'black'
  console.log('evento mouseout');
  });

  // Focus
  var input = document.querySelector('#campo_nombre');
  input.addEventListener('focus', function(){
    console.log('[focus] estas DENTRO del input');
  });

  // Blur
  input.addEventListener('blur', function(){
    console.log('[blur] estas FUERA del input');
  });

  // Keydown
  input.addEventListener('keydown', function(event){
    console.log('[keydown] Pulsando esta tecla ', String.fromCharCode(event.keyCode));
  });

  // Keypress
  input.addEventListener('keypress', function(event){
    console.log('[keypress] Tecla presionada ', String.fromCharCode(event.keyCode));
  });

  // Keyup
  input.addEventListener('keyup', function(event){
    console.log('[keyup] Tecla solté ', String.fromCharCode(event.keyCode));
  });

}); // fin de la función flecha de load

