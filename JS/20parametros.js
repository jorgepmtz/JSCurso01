'use strict';
// ---- ++++++ Parametro REST ++++ ----- ... [nombre_parametro] -> genera un array con el RESTO de los parámetros

function listadoFrutasRest (f1, f2, ... resto_de_frutas){
  console.log('Fruta 1: ', f1);
  console.log('Fruta 2: ', f2);
  console.log(resto_de_frutas);
}

listadoFrutasRest('naranja', 'manzana', 'sandia', 'pera', ' melon', 'coco');

// ---- ++++++ Parametro SPREAD ++++ ----- ... [nombre_parametro] -> genera un array con el RESTO de los parámetros

function listadoFrutasSpread (f1, f2, ... resto_de_frutas){
  console.log('Fruta 1: ', f1);
  console.log('Fruta 2: ', f2);
  console.log(resto_de_frutas);
}

var frutas = ['papaya', 'kiwi']
listadoFrutasSpread(...frutas, 'sandia', 'pera', ' melon', 'coco');

