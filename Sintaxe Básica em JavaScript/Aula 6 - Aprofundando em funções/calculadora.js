function calculadora()
{
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/) \n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7){
        alert('Operação Invalida')
        calculadora();
    }

    else
    {
        let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor'));
    let resultado;

    if (!n1 || !n2){
        alert('Parametros invalidos')
        calculadora()
    }
    else
    {
        function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2}=${resultado}`);
            novaOperacao()
        }
    
        function subtracao(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2}=${resultado}`);
            novaOperacao()
        }
    
        function multiplicacao(){
            resultado = n1 * n2;
            alert(`${n1} * ${n2}=${resultado}`);
            novaOperacao()
        }
    
        function divisaoreal(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2}=${resultado}`);
            novaOperacao()
        }
    
        function divisaointeiro(){
            resultado = n1 % n2;
            alert(`${n1} % ${n2}=${resultado}`);
            novaOperacao()
        }
    
        function potenciacao(){
            resultado = n1 ** n2;
            alert(`${n1} elevado ${n2}=${resultado}`);
            novaOperacao()
        }
    
        function novaOperacao(){
            let opcao = Number(prompt('Deseja fazer outra operacao?\n 1 - Sim \n 2 - Nao'))
    
            if(opcao == 1)
            {
                calculadora()
            }
            else if (opcao == 2)
            {
                alert('Até mais');
            }
            else
            {
                alert('Opção Invalida');
                novaOperacao()
            }
        }
    }

    // if (operacao == 1){
    //     soma();
    // }
    // else if (operacao == 2)
    // {
    //     subtracao();
    // }
    // else if (operacao == 3)
    // {
    //     multiplicacao();
    // }
    // else if (operacao == 4)
    // {
    //     divisaoreal();
    // }
    // else if (operacao == 5)
    // {
    //     divisaointeiro();
    // }
    // else if (operacao == 6)
    // {
    //     potenciacao();
    // }
    // else
    // {
    //     alert('Opção invalida');
    //     calculadora();
    // }

    switch(operacao){
        case 1: 
            soma()
            break;
        case 2:
            subtracao()
            break;
        case 3:
            multiplicacao()
            break;
        case 4:
            divisaoreal()
            break;
        case 5:
            divisaointeiro()
            break;
        case 6:
            potenciacao()
            break;
        default:
            alert('Opção Invalida')
            break;
    }

    console.log (operacao)
}
}
calculadora()
