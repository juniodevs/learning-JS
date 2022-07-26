/*
32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

let vetor = [10, 9, 6, 8, 10, 9, 7]

const mediaaritimetica = (vetor) => {

    let divisao = 0;
    let notassemdivisao = 0

    vetor.forEach(vetor => {

        notassemdivisao += vetor
        divisao++;
    });
    return `${(notassemdivisao/divisao).toFixed(2).replace('.', ',')} Média Final`
}

console.log(mediaaritimetica(vetor))