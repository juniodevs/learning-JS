/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
*/

function repetir (code, num)
{
    for(i = 0; i < num; i++)
    {
        console.log(code);
    }
}

repetir("código", 2)
repetir(7, 3)