/*
29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor
e conte quantos números deste vetor estão no intervalo [10,20] (repare que
o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do
intervalo, escrevendo estas informações.
*/

let vetor = [5, 6, 10, 11, 12, 20, 21, 25]

const intervalo = (vetor) =>
{
    let nointervalo = 0;
    let foradointervalo = 0;
    vetor.forEach(vetor => {
        if (vetor >= 10 && vetor <= 20)
        {
            nointervalo++;
        }
        else
        {
            foradointervalo++;
        }
    });
    return `${nointervalo} Estão dentro do Intervalo. ${foradointervalo} Estão fora do Intervalo`
}

console.log(intervalo(vetor))
