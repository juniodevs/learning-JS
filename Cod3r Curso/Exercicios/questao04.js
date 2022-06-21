/*
Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
    exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
    Exemplos:
    nomeDoMes(1) // retornará "janeiro"
    nomeDoMes(4) // retornará "abril"
*/

var nomeDomes = function(mes){
    switch(mes){
        case 1:
            console.log(mes ,"janeiro")
            break;
        case 2:
            console.log(mes ,"fevereiro")
            break;
        case 3:
                console.log(mes ,"março")
                break;
        case 4:
                console.log(mes ,"abril")
                break;
        case 5:
                    console.log(mes ,"maio")
                    break;
        case 6:
                    console.log(mes ,"junho")
                    break;
        case 7:
                    console.log(mes ,"julho")
                    break;
        case 8:
                    console.log(mes ,"agosto")
                    break;
        case 9:
                    console.log(mes ,"setembro")
                    break;
        case 10:
                        console.log(mes ,"outubro")
                        break;
        case 11:
                        console.log(mes ,"novembro")
                        break;
        case 12:
                        console.log(mes ,"dezembro")
                        break;
        default:
                        console.log("Número invalido");
    }
}

nomeDomes(1)
nomeDomes(4)
nomeDomes(6)
nomeDomes(13)