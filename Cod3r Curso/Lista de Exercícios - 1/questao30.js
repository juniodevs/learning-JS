/*
30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor
*/

let vetor = [1, 2, 3 , 4, 5, 6, 7, 9, 10]
let vetor2 = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90]

const maioremenor = (vetor) => {
    let maior = 0
    let menor = 1000
    vetor.forEach(vetor => {
        if (maior <= vetor)
        {
            maior = vetor
        }
        if (menor >= vetor)
        {
            menor = vetor
        }
    });
    return `Maior: ${maior}, Menor: ${menor}`
}

console.log(maioremenor(vetor))
console.log(maioremenor(vetor2))