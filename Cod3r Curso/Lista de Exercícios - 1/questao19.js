/*
19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

const produto = (codigo, quantidade) => {

    switch (codigo)
    {
        case 100:
        return `${quantidade} Cachorros Quentes é R$${quantidade * 3.00}`
        case 200:
        return `${quantidade} Hamburgeres Simples é R$${quantidade * 4.00}`
        case 300:
        return `${quantidade} Cheeseburguer é R$${quantidade * 5.50}`
        case 400:
        return `${quantidade} Baurus é R$${quantidade * 7.50}`
        case 500:
        return `${quantidade} Refrigerantes é R$${quantidade * 3.50}`
        case 600:
        return `${quantidade} Sucos é R$${quantidade * 2.80}`
        default:
        return `Produto não encontrado`
    }
}

console.log(produto(100, 5))
console.log(produto(200, 5))
console.log(produto(300, 5))
console.log(produto(400, 5))
console.log(produto(500, 5))
console.log(produto(600, 5))
console.log(produto(700, 5))