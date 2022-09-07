'use strict';

var nombres = ['Hugo', 'Paco', 'Luis', 'Mickey', 'Donald'];
var lenguajes = new Array('PHP', 'JS', 'Java', 'C++', 'Go');

// var elemento = parseInt(prompt('Elemento ?  ',0));
// alert(nombres[elemento]);
console.log(lenguajes);

document.write('--------++++++++ Ahora con for ++++++++-------')
document.write('<h1>Lista de lenguajes</h1>');
document.write('<ul>');
for (var i=0; i < lenguajes.length; i++) {
  document.write('<li>'+lenguajes[i]+'</li>');
}
document.write('</ul>');

document.write('--------++++++++ Ahora con forEach // No itera simplemente ejecuta para cada elemento del array ++++++++-------')

document.write('<h1>Lista de lenguajes</h1>');
document.write('<ul>');

lenguajes.forEach((elemento,indice, arreglo)=>{
  console.log(arreglo);
  document.write('<li>'+indice+' - '+elemento+'</li>');
});

document.write('</ul>');


document.write('--------++++++++ Ahora con for in // otra forma de recorrer elemntos de un array ++++++++-------')

document.write('<h1>Lista de lenguajes</h1>');
document.write('<ul>');

for (let l in lenguajes){
  document.write('<li>'+lenguajes[l]+'</li>');
};

document.write('</ul>');

// +++++ ----- Busqueda del valor en un array con .find ---- ++++

var find = lenguajes.find(lng => lng == 'Java');
console.log(find);

// +++++ ----- Busqueda del índice en un array con .findIndex ---- ++++

var find = lenguajes.findIndex(lng => lng == 'Java');
console.log(find);

// +++++ ----- Encontrar si existe en un array con .some ---- ++++

var precios = [10, 20, 45, 120, 23, 2, 8]

var buscaPrc = precios.some(prc => prc > 119);  // Espero true ----------
console.log(buscaPrc);


