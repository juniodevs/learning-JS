/*
12) Faça um algoritmo que calcule o fatorial de um número.
*/

const fatorial = (num) => {
    let fatorialx = num
    let resultado = num
    for (let i = 1; i < fatorialx; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(2))