function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function (){
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
  }
}

function Persona (nombre, apellido, edad, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
  return this.altura > 1.80
}

function Desarrollador (nombre, apellido){
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} y me llamo ${this.desarrollador} y soy desarrollador/a`)
}


// La palabra new significa que estoy creando un nuevo objeto,
//al usa la palabra "new" podemos usar la palabra "this" para retornar el objeto

//var jorge = new Persona ('Jorge', 'Caballero', 26, 1.81)
//var erika = new Persona ('Erika', 'Luna', 22, 1.70)
//var arturo = new Persona ('Arturo', 'Martinez', 29, 1.65)
