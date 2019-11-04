const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeURL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function(persona){
  console.log(`Hola yo soy, ${persona.name}`)
}

$.get(lukeURL , opts, onPeopleResponse)
