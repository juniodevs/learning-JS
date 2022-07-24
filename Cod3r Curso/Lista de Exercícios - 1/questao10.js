/*
10) Crie uma função que verifica se um número inteiro passado
como parêmetro é divisível por 3 e retorne true ou false.
*/

 const verficardivisivel = (num) =>
{
    if (num % 3 == 0)
    {
        return true
    }
    else
    {
        return false
    }
}

console.log(verficardivisivel(3))
console.log(verficardivisivel(5))
console.log(verficardivisivel(6))