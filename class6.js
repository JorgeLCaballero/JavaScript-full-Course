var jorge = {
  nombre: 'jorge',
  apellido: 'caballero',
  edad: 26,
  ingeniero: false,
  cocinero: false,
  cantante: false,
  dj: false,
  learner: true
}

function ImprimirProfesiones(persona){
  console.log(`${persona.nombre} es: `)
  if (persona.ingeniero){
    console.log('ingeniero')
  } else {
    console.log('no es ingeniero')
  }
  if (persona.cocinero){
    console.log('cocinero')
  }
  if (persona.cantante){
    console.log('cantante')
  }
  if (persona.dj){
    console.log('dj')
  }
  if (persona.learner){
    console.log('learner')
  }
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD




function imprimirSiEsMayorDeEdad (persona){
  if (esMayorDeEdad(persona)){
    console.log('jorge es mayor de edad')
  } else {
    console.log('jorge no es mayor de edad')
  }
}

function permitirAcceso (persona){
  if (!esMayorDeEdad){
    console.log('ACCESO DENEGADO')
  }
}

var juan = {
  edad:12
}

const esMenordeEdad = ({edad}) => edad  <= MAYORIA_DE_EDAD

imprimirSiEsMayorDeEdad(jorge)
ImprimirProfesiones(jorge)
esMenordeEdad(juan)
