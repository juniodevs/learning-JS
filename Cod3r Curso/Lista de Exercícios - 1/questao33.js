/*
33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

let vetor1 = [1, 2, 3]
let vetor2 = ['a','b','c']
let vetor3 = [0.2, 0.3, 0.4]

const concatenacao = vetor1.concat(vetor2, vetor3)
const concatenacao2 = vetor2.concat(vetor1, vetor3)

console.log(concatenacao)
console.log(concatenacao2)
console.log(concatenacao)