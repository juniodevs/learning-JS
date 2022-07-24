/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

const semanautil = (dia) => {
    switch (dia){
        case 1:
            return `Domingo Não é um dia útil`
        case 2:
            return `Segunda é um dia útil`
        case 3:
            return `Terça é um dia útil`
        case 4:
            return `Quarta é um dia útil`
        case 5:
            return `Quinta é um dia útil`
        case 6:
            return `Sexta é um dia útil`
        case 7:
            return `Sábado Não é um dia dia útil`
        default:
            return `Dia Inválido`
    }
}

console.log(semanautil(1))
console.log(semanautil(2))
console.log(semanautil(3))
console.log(semanautil(4))
console.log(semanautil(5))
console.log(semanautil(6))
console.log(semanautil(7))
console.log(semanautil(8))