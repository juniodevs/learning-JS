/*
38) Escreva uma função que receba dois parâmetros início e fim.
Essa função deve imprimir todos os números ímpares que estão entre
esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

const veificarimpares = (inicio, fim) =>
{
    while(inicio < fim)
    {
        if(inicio % 2 != 0)
        {
            console.log(inicio)
        }
        inicio++;
    }
}

console.log(veificarimpares(0, 100))
console.log(veificarimpares(0, 200))