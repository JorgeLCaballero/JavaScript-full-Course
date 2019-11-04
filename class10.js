var Jorge = {
  nombre : 'Jorge',
  apellido: 'Caballero',
  edad: 26,
  altura: 1.76,
  cantidadDeLibros: 125
}

var Dario = {
  nombre: 'Dario',
  apellido: 'Jimis',
  edad: 27,
  altura: 1.32,
  cantidadDeLibros: 132
}

var Martin = {
  nombre : 'Martin',
  apellido: 'Cabezas',
  edad: 26,
  altura: 1.90,
  cantidadDeLibros: 152
}

var Vicky = {
  nombre : 'Vicky',
  apellido: 'Ceborrea',
  edad: 26,
  altura: 1.56,
  cantidadDeLibros: 165
}

var Paula = {
  nombre : 'Paula',
  apellido: 'Lalala',
  edad: 26,
  altura: 1.82,
  cantidadDeLibros: 176
}

const esAlta = persona => persona.altura >= 1.75

var personas = [Jorge, Dario, Martin, Vicky, Paula]

var personasAltas = personas.filter(esAlta)

const pasarAlturaACms = persona => {

  return {
    ...persona,
    altura:persona.altura * 100
  }
}

var personasCms = personas.map(pasarAlturaACms)

/*var acum = 0

for (var i = 0; i < personas.length; i++){
  acum = acum + personas[i].cantidadDeLibros
}
*/

const reducer = (acum, {cantidadDeLibros}) =>  acum + cantidadDeLibros


var totalDeLibros = personas.reduce(reducer, 0)

console.log(`en total todos tienen ${totalDeLibros} cantidad de libros`)
