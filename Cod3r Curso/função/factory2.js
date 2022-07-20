function criarProduto(nome, preco)
{
    return {
        Nome: nome,
        Preco: preco,
        Desconto: 0.1
    }
}

console.log(criarProduto('Teste', 1234));
console.log(criarProduto('SmartPhone', 1463));