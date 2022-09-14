'use strict';

window.addEventListener('load', function(){
  // Timers
  document.querySelector('h1').style.fontSize = '25px'; // tuve que definirle un valor de 50px de inicio porque no lograba capturar en setInterval el tamaño d ela fuente
  // función para iniciar el ciclo
  function intervalo(){
    var tiempo = setInterval(function() {           // setTimeout se ejecuta una sola vez :: setInterval se ejecuta por ciclos
      console.log('Ejecutado setInterval  - - - - ')
  
      var headx = document.querySelector('h1');
      console.log(headx.style.fontSize + ' En definición');
      if(headx.style.fontSize == '25px' ){
        console.log(headx.style.fontSize + 'En If');
        headx.style.fontSize = '30px';
      }else{
        headx.style.fontSize = '25px';
      }
    }, 500);
    return tiempo;  
  }
  // Llamo a la función intervalo() para iniciar el ciclo
  var tiempo = intervalo();
  // Función stop para detener el ciclo
  var stop = document.querySelector('#btnStop');
  stop.addEventListener('click', function(){
    alert('has parado el bucle de setInterval');
    clearInterval(tiempo);
  });
  // Función start para arrancar nuevamente el ciclo
  var start = document.querySelector('#btnStart');
  start.addEventListener('click', function(){
    alert('has iniciado el bucle de setInterval');
    intervalo();
  });

}); 