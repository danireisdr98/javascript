/**
 * operadores lógicos de computação
 * 
 * em javascript, os operadores de comparação são usados para comparar dois valores e retornar um valor booleano (true ou false) com base na comparação.
 * 
 * aqui estão os principais operadores de comparação:
 * 
 *igualdade (==): verifica se os dois valores são iguais, realizando coerção de tipo se necessário.

 estritamente igual (===): verifica se os dois valores são iguais sem coerção de tipo 

 desigualdade (=! )verifica se os dois valores são desiguais sem coerção de tipo.

maior que (>): verifica se o valor a esquerda é maior que o valor a direita. 

menor que (<): verifica se o valor a esquerda pé menor que o valor da direita

maior ou igual (>=): verifica se o valor a esquerda é maior ou igual que o valor a direita.

menor ou igual (<=) verifica se o valor a esquerda é menor ou igual que o valor a direita.
 */

//* igual(==)
console.log("igual (==)")
console.log(5 == "5") //* true, porque realiza coerção de tipo 
console.log(5 == 5)// true
console.log(5 == 10) // false

// estritamente igual (==)
console.log("igual (==)")
console.log(5 == "5") //* true, porque realiza coerção de tipo 
console.log(5 == 5)// true
console.log(5 == 10) // false

//estriamente desigual (!==)
console.log("estriamente desigual (!==)")
console.log(5 == "5") // true, porque realiza coerção de tipo 
console.log(5 == 10) // true
console.log(5 == 5) // false

// maior que (>)
console.log("maior que (>)")
console.log(5 == "5") // true
console.log(5 == 10) // false
console.log(5 == 5) // false

// menor que (<)
console.log("maior que (<)")
console.log(5 == "5") // true
console.log(5 == 10) // false
console.log(5 == 5) // false

// maior ou igual (>=)
console.log("maior que (>=)")
console.log(10 == 5) // true
console.log(5 == 10) // false
console.log(5 == 5) // true

// menor ou igual (<=)
console.log("meno ou igaual (<=)")
console.log(10 == 5) // true
console.log(10 == 5) // false
console.log(5 == 5) // true 