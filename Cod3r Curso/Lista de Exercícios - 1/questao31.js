/*
31) Escrever um algoritmo que percorre um vetor de inteiros,
conta quantos números negativos há nesse vetor e imprime a
quantidade no console.
*/

let vetor = [-1, -2, -3, 1, 2, 3]

const negativos = (vetor) => {

    let negativos = 0;

    vetor.forEach(vetor => {
        if (vetor < 0)
        {
            negativos++;
        }
    });
    return `São ${negativos} Numeros Negativos`
}
console.log(negativos(vetor))