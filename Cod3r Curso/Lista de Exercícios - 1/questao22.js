/*
22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

const pagaranuidade = (mes, preco) => {
    let montante = preco * Math.pow((1 + 0.05), mes - 1);
    return montante.toFixed(2).replace('.', ',');
}

console.log(pagaranuidade(1, 100))
console.log(pagaranuidade(2, 100))
console.log(pagaranuidade(3, 100))