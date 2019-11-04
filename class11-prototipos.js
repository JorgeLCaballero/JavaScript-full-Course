function Persona (nombre, apellido, edad, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad
  this.altura = altura
}

Persona.prototype.saludar = function (){
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function (){
  if(this.altura > 1.80){
    console.log('Soy Alto')
  } else {
    console.log('soy peke')
  }
}

// La palabra new significa que estoy creando un nuevo objeto,
//al usa la palabra "new" podemos usar la palabra "this" para retornar el objeto

var jorge = new Persona ('Jorge', 'Caballero', 26, 1.81)
var erika = new Persona ('Erika', 'Luna', 22, 1.70)
var arturo = new Persona ('Arturo', 'Martinez', 29, 1.65)
