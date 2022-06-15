//par nome/valor

const teste = 'Opa'; //contexto léxico 1
function exec()
{
    const teste ='Ola' //contexto léxico 2
    return teste;
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nomae: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua 2',
        numero: 123
    } 
}

console.log (teste);
console.log (exec());
console.log (cliente);
