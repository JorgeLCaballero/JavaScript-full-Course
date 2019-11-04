
class Persona {
  constructor(nombre, apellido, edad, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
  }

  saludar(fn) {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
  }
  if(fn){
    fn(this.nombre, this.apellido)
  }
  soyAlto(){
    return this.altura > 1.80

  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)

}
  saludar(fn){
    console.log(`Hola me llamo ${this.nombre} y me llamo ${this.desarrollador} y soy desarrollador/a`)
    if(fn){
      fn(this.nombre, this.apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen dia ${nombre} ${apellido}`)
  if (esDev){
    console.log('Ah, mira, no sabía que eras Desarrollador/a')
  }
}

var jorge = new Persona ('Jorge', 'Caballero', 26, 1.81)
var erika = new Persona ('Erika', 'Luna', 22, 1.70)
var arturo = new Desarrollador ('Arturo', 'Martinez', 29, 1.65)

jorge.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)


// La palabra new significa que estoy creando un nuevo objeto,
//al usa la palabra "new" podemos usar la palabra "this" para retornar el objeto

//var jorge = new Persona ('Jorge', 'Caballero', 26, 1.81)
//var erika = new Persona ('Erika', 'Luna', 22, 1.70)
//var arturo = new Persona ('Arturo', 'Martinez', 29, 1.65)
