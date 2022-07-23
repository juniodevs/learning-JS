/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function triangulo(tamanho1, tamanho2, tamanho3)
{
    
    if (tamanho1 != tamanho2 && tamanho2 != tamanho3 && tamanho1 != tamanho3)
    {
        console.log("Triângulo Escaleno")
    }
    else if (tamanho1 == tamanho2 && tamanho2 == tamanho3)
    {
        console.log("Triângulo Equilátero")
    }
    else
    {
        if (tamanho1 == tamanho2 && tamanho2 != tamanho3)
        {
        console.log("Triângulo Isóceles")
        }
        else if(tamanho1 == tamanho3 && tamanho3 != tamanho2)
        {
        console.log("Triângulo Isóceles")
        }
        else
        {
        console.log("Triângulo Isóceles")
        }
    }
}

triangulo(1,2,3)
triangulo(3,3,3)
triangulo(1,1,2)
triangulo(1,2,1)
triangulo(1,2,2)