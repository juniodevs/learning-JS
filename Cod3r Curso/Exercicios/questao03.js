/*
Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
Exemplos:
calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"
*/

let calcularSalario = function(mes, hora){
    let final = mes * hora;
    console.log(`Salário igual a R$ ${final}`)
}

calcularSalario(150, 40.5)
calcularSalario(200, 32)