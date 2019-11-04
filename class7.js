var jorge = {
  nombre: 'jorge',
  apellido: 'caballero',
  edad: 26,
  peso: 77
}

console.log(`Al inicio del año ${jorge.nombre} pesa ${jorge.peso}kg`)

const INCREMENTO_PESO = .300
const DIAS_DEL_ANIO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < .3
const realizarDeporte = () => Math.random() < .4

const META = jorge.peso - 3
var dias = 0

while (jorge.peso > META){

  if (comeMucho()){
    aumentarDePeso(jorge)
  }
  if(realizarDeporte()){
    adelgazar(jorge)
  }
  dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${jorge.nombre} adelgazo`)
