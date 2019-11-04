var contador = 0

const llueve = () => Math.random() < .25

do {
  contador++
} while (!llueve())

console.log(`Fui a ver si llovia ${contador} veces`)
