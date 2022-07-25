/*
17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

const novoplano = (salario, plano) => {
    let sal = salario
    
    switch(plano)
    {
        case 'A':
        return sal + (sal * 0.10)

        case 'B':
        return sal + (sal * 0.15)

        case 'C':
        return sal + (sal * 0.20)

        default:
            return `Plano Inválido`
    }
}

console.log(novoplano(5000, 'A'))
console.log(novoplano(5000, 'B'))
console.log(novoplano(5000, 'C'))
console.log(novoplano(5000, 'D'))