/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

const dividendodivisor = (dividendo,divisor) => {
    let resultado = Math.floor(dividendo/divisor)
    console.log(`Resultado: ${resultado}`)
    console.log(`Resto: ${dividendo%divisor}`)
}

dividendodivisor(4,2)
dividendodivisor(11,10)