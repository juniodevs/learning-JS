{
    {
        {  
        {
            var sera = 'Será???'
        console.log(sera);
        }
        }
    }
}

console.log(sera);


function teste() {
    var local = 123;
    console.log(local);
}

teste()

//console.log(local); //Escopo visivel apenas dentro da função

var numero = 1
{
    var numero = 2
    console.log ('dentro = ', numero)
}
console.log('fora =', numero);
