/*
36) Crie duas funções que recebem dois parâmetros, um vetor com apenas
valores numéricos e um número inteiro. Faça com que a primeira função
retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o
mesmo da primeira se e somente se o valor do elemento for maior que 5
*/

let vetor = [1, 2, 3, 4, 5, 6]

const funcaodemulti = (vetor, num1) =>
{
    let vetorfinal = []
    
    for(i = 0; i < vetor.length; i++)
    {
        vetorfinal[i] = vetor[i] * num1
    }
    return vetorfinal
}

console.log(funcaodemulti(vetor, 5))
console.log(funcaodemulti(vetor, 7))