/*
21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

const plano = (idade) => {
    
    if(idade <= 10)
    {
        return `menos de 10 anos pagam R$180`
    }
    else if (idade > 10 && idade <= 30)
    {
        return `Pessoas entre 10 e 30 pagam R$150`
    }
    else if (idade > 30 && idade <= 60)
    {
        return `Pessoas entre 30 e 60 pagam R$195`
    }
    else if (idade > 60)
    {
        return `Acima de 60 anos pagam R$230`
    }
    else
    {
        return `Valor Inválido`
    }
}

console.log(plano(10))
console.log(plano(5))
console.log(plano(30))
console.log(plano(60))
console.log(plano(70))