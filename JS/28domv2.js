'use strict';
// ---- +++++++ Ver 2 del 28dom.js usando : Array.prototype.slice.call --------- ++++++++++

// var todosLosDiv = document.querySelectorAll('div');
// console.log(todosLosDiv);

// var arr = array.prototype.slice.call(todosLosDiv);
// console.log(arr);

// ------------ OPCIÓN UNO ------- +++++++++ esta la busque en : https://thewebdev.info/2021/02/27/how-to-convert-an-htmlcollection-to-an-array/
// const divs = document.querySelectorAll('div')
// console.log(divs);
// const arr = Array.prototype.slice.call(divs);
// console.log(arr);

// arr.forEach(element => {
//   var parr = document.createElement('p');
//   console.log(parr);
//   var txt = document.createTextNode(element);
//   console.log(txt);
//   parr.appendChild(txt);
//   document.querySelector('#misec').appendChild(parr);
// });

// ------------ OPCIÓN DOS ------- +++++++++ la del curso
var divs = document.getElementsByTagName('div');
var secc = document.querySelector('#misec');
var hr = document.createElement('hr');

var i;
for (i in divs){
  if (typeof divs[i].textContent == 'string'){ 
    var parr = document.createElement('p');
    var txt = document.createTextNode(divs[i].textContent);
    console.log(divs[i].textContent);
    parr.append(txt);
    secc.append(parr);
  }
}
secc.append(hr);

// ------ ++++++ Conseguir elementos por su Clase +++++ ------

var divsRojos = document.getElementsByClassName('rojo');
console.log(divsRojos);
var divsAmarillos = document.getElementsByClassName('amarillo');
console.log(divsAmarillos);

var k;
for(k in divsRojos){
  if (divsRojos[k].className == 'rojo'){
    console.log(divsRojos[k]);
    divsRojos[k].style.background = 'red';
  };
}
var j;
for(j in divsAmarillos){
  if (divsAmarillos[j].className == 'amarillo'){
    console.log(divsAmarillos[j]);
    divsAmarillos[j].style.background = 'yellow';
  };
}

// ----++++++ querySelector ++++++ --------

var head = document.querySelector('#encabezado');
console.log(head);
var claseRojo = document.querySelector('.rojo');
console.log(claseRojo);
var etiqueta = document.querySelector('div');
console.log(etiqueta);

 
