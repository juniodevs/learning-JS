/*
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
Exemplos:
inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
inverso(-2000) // retornará 2000
inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo string"
*/

var inverso = function(valor){

    if (valor == true)
    {
        valor = false;
    }
    else if (valor == false)
    {
        valor = true;
    }
    else if (valor > 0)
    {
        valor = valor - valor - valor;
    }
    else if (valor < 0)
    {
        valor = (valor - valor) - valor;
    }
    console.log(valor);
}

inverso(true)
inverso(false)
inverso (10)
inverso (-10)
inverso(-25)
inverso (256)