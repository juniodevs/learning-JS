// pessoa -> 123

const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'

console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa)
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'

console.log(pessoaConstante)