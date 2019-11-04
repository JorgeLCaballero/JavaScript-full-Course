
var Jorge = {
  nombre : 'Jorge',
  apellido: 'Caballero',
  edad: 26
}

var Dario = {
  nombre: 'Dario',
  apellido: 'Jimis',
  edad: 27
}

/*
function imprimirNombreEnMayusculas ({persona}){
  // var nombre = persona.nombre
  var {nombre} = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(Jorge)
imprimirNombreEnMayusculas(Dario)
imprimirNombreEnMayusculas({nombre: 'pepito'})
imprimirNombreEnMayusculas()
*/
function imprimirNombreYEdad(persona){
  // Hola, me llamo Jorge y tengo 26 años
  // Hola, me llamo Mariso y tengo 27 años
var {nombre,edad} = persona
  console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}


imprimirNombreYEdad(Jorge)
imprimirNombreYEdad(Dario)

function cumpleanos(persona){
  return{
    ...persona,
    edad: persona.edad +1
  }
  persona.edad += 1
}

cumpleanos()
