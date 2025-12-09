/**
 * tipos primitivos
 * 
 * string
 * number
 * boolean
 * null
 * symboll
 * undefined
 */

// string: representa cadeias de carcteres como um texto.
let nome = "joão pedro"
let nome2 = "santos lima"
let nome3 = "carlão"

//number: representa valores numéricos, tanto inteiros quanto de ponto flutuante.
let idade = 30
let altura = 1.80

//boolean: representa valores lógicos, que podem ser verdadeiros (true) ou falsos (false).
let isEstudante = true
let isTrabalho = false

//underfined: indica que uma varialvel foi declarada, mas ainda não foi atribuida um valor
let endereco
console.log(endereco) // underfined

//null: representa a ausência intencional de valor ou objeto.
let telefone = null
//symbol: representa um identificador único e imutavel
let id = Symbol("id") 
let outrold = Symbol("id")

console.log(nome)
console.log(nome2)
console.log(nome3)
console.log(idade)
console.log(altura)
console.log(isEstudante)
console.log(isTrabalho)
console.log(endereco)
console.log(telefone)
console.log(id == outrold) //false, pois cada symbol é único.










