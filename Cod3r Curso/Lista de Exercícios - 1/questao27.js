/*
27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

const crescimento = (altura1, taxas1, altura2, taxas2) => {
    if (altura1 == altura2)
    {
        if (taxas1 > taxas2)
        {
            return `A Criança 1 ultrapassa a criança 2 em 1 ano ou menos`
        }
        else if (taxas1 < taxas2)
        {
            return `A Criança 2 ultrapassa a criança 1 em 1 ano ou menos`
        }
        else return `A crianças tem a altura de crescimento igual`
    }
    else {
        if (altura1 > altura2)
        {
            if (taxas1 >= taxas2)
            {
                return`A criança menor não ultarpassa a maior`
            }
            else
            {
                return `A criança menor ultrapassa a maior em ${calcularotempo(altura1, taxas1, altura2, taxas2)} anos`
            }
        }
    }
}

const calcularotempo = (alturaMenor, taxadeAlturamenor, alturaMaior, taxadeAlturamaior) =>{

    let qntdeanos = 0
    while (alturaMenor < alturaMaior)
    {
        alturaMenor += taxadeAlturamenor
        alturaMaior += taxadeAlturamaior
        qntdeanos++;
    }
    return `${qntdeanos}`
}

console.log(crescimento(140, 3, 120, 4))
console.log(crescimento(150, 2, 130, 4))

