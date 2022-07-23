/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

const juroSimples = (capital, taxa, tempo) => {
    return capital + (capital * taxa * tempo);
}

const juroComposto = (capital, taxa, tempo) => {
    return capital * (1 + taxa) ** tempo;
}

console.log(`Juros Simples: R$${juroSimples(250, 10 / 100, 5).toFixed(2).replace('.',',')}`)
console.log(`Juros Compostos: R$${juroComposto(250, 10 / 100, 5).toFixed(2).replace('.',',')}`)

