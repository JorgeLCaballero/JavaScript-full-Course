const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }



function obtenerPersonaje (id, callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url, opts, callback)
    .fail(() => {
      console.log(`Sucedio un error, no se puede obtener el personaje ${personaje.name}`)
  })
}



obtenerPersonaje(1, function(personaje) {
  console.log(`Hola, yo soy ${personaje.name}`)
  obtenerPersonaje(2, function(personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)
    obtenerPersonaje(3, function (personaje){
      console.log(`Hola, yo soy ${personaje.name}`)
      obtenerPersonaje(4, function(personaje){
        console.log(`Hola, yo soy ${personaje.name}`)
      })
    })
  })
})
