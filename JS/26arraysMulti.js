'use strict'
// ------- ++++++++ Arrays Multidimensionales +++++++ ------------

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'la vida es bella', 'El gran torino'];

var cine = [categorias, peliculas];

console.log(cine);
console.log(cine[0][2]);
console.log(cine[1][2]);

var elemento = ''
// --- ++++ el Metodo .push INSERTA registros en la última posición. ++++ ----
do {
  elemento = prompt('Agregar película: ');
  peliculas.push(elemento);
} while (elemento != '')
// --- +++ El método .pop ELIMINA el último elemento del array +++ ---- en este caso para que no se quede el elemento "". ---
peliculas.pop();

// --- +++ El método .splice ELIMINA un DETERMINADO elemento del array conforme a un índice ---- ++++ 
var indice = peliculas.indexOf('la vida es bella');
console.log('el índice es: '+indice);

if(indice > -1){
  peliculas.splice(indice,1);
}
console.log('El array películas sin el indice '+indice);
console.log(peliculas);

// --- ++++ El método .join CONVIERTE el array en texto separado por comas --- +++ 

var peliculasString = peliculas.join();
console.log('El string de el array películas');
console.log(peliculasString);

// --- +++ El Método .split SEPARA una cadena de texto para trasnformarla en un array ---- ++++ 
var peliculasArray = peliculasString.split(',');

console.log('El string lo vuelve a hacer array como peliculasArray');
console.log(peliculasArray);

// --- ++++ El método .sort ORDENA un array --- ++++

var peliculasSort = peliculasArray.sort();
console.log('El nuevo array lo ordena con .sort');
console.log(peliculasSort);

// --- ++++ El MediaStreamAudioDestinationNode.reverse voltea el orden del array +++ ---

var peliculasInv = peliculasArray.reverse();
console.log('Ordena de forma inversa el peliculas Array')
console.log(peliculasInv);

