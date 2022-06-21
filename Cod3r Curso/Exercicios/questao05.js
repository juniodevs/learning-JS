/*
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplos:
maiorOuIgual(0, 0)
maiorOuIgual(0, "0")
maiorOuIgual(5, 1)
*/

var maiorOuIgual = function(num1, num2){
    if(num1 >= num2){
        console.log("true");
    }
    else
    {
        console.log("false")
    }
}

maiorOuIgual(0, 0)
maiorOuIgual(0, "0")
maiorOuIgual(5, 1)
maiorOuIgual(1,5)