const imprimirResultado = function (nota) {
    switch (Math.floor(nota))
    {
        case 10:
            console.log('Quadro de Honra')
            break
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log ('Aprovado')
            break
        case 6: case 5 :case 4:
            console.log ('Recuperacao')
            break
        case 3: case 2: case 1:
            console.log ('Reprovado')
            break
        default:
            console.log ('Nota Invalida')
            break
    }
}

imprimirResultado(1)
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.99)
imprimirResultado(2.3)
imprimirResultado(11)