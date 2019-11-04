
class Persona {
  constructor(nombre, apellido, edad, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
  }
  soyAlto(){
    return this.altura > 1.80

  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)
    
}
  saludar(){
    console.log(`Hola me llamo ${this.nombre} y me llamo ${this.desarrollador} y soy desarrollador/a`)
  }
}

// La palabra new significa que estoy creando un nuevo objeto,
//al usa la palabra "new" podemos usar la palabra "this" para retornar el objeto

//var jorge = new Persona ('Jorge', 'Caballero', 26, 1.81)
//var erika = new Persona ('Erika', 'Luna', 22, 1.70)
//var arturo = new Persona ('Arturo', 'Martinez', 29, 1.65)
