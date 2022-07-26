/*
34) Construa uma função que receberá duas Strings de tamanhos
variados e que retornará True ou False caso
todos os caracteres (independentemente de ser
maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

let palavra1 = 'Palavra'
let palavra2 = 'palavra'

const verificarstring = (stringnum1, stringnum2) =>
{

    string1 = stringnum1.toUpperCase()
    string2 = stringnum2.toUpperCase()
    if (string1 == string2)
    {
        return true
    }
    else
    {
        return false
    }
}

console.log(verificarstring(palavra1, palavra2))
console.log(verificarstring('teste', 'TESTE'))
console.log(verificarstring('carros', 'pessoas'))