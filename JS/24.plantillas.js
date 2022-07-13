'use strict'

var nombre = prompt('Nombre: ');
var apellido = prompt('Apellidos: ');

var texto1 = 'Mi nombre es : '+nombre+'<br/>'+'Mi apellido es: '+ apellido;

document.write('----- ++++++ Sin plantilla --- +++++ <br/><br/><br/>');
document.write(texto1);

var texto2 = `
<h1> Me presento: </h1>
<br/>
<h2>Mi nombre es: ${nombre}</h2>
<h2>Mi apellido es: ${apellido}</h2>
<br/>
`;
document.write('<br/><br/>----- ++++++ Con plantilla --- +++++<br/>');
document.write(texto2);
