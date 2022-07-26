/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let vetor2 = [1, 3, 5, 7, 9, 11]

const lernumeros = (vetor) =>
{
    let impares = 0;
    let pares = 0;
    vetor.forEach(vetor => {
        if (vetor % 2 == 0)
        {
            pares++;
        }
        else
        {
            impares++;
        }
    });
    return `Ímpares ${impares}, Pares ${pares}`
}
console.log(lernumeros(vetor))
console.log(lernumeros(vetor2))