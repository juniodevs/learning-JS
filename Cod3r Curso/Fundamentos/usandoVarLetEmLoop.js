for (var i = 0; i < 10; i++)
{
    console.log(i);
}

console.log ('i = ', i);

//For com Let

for (var x = 0; x < 10; x++)
{
    console.log(x);
}

//console.log ('x = ', x); //Vai gerar um erro

// Com Var

var funcs = []

for (var y = 0; y < 10; y++)
{
    funcs.push(function(){
        console.log(y);
    })
}

funcs[2]()
funcs[8]()

// Com LET


var funcs2 = []

for (let z = 0; z < 10; z++)
{
    funcs2.push(function(){
        console.log(z);
    })
}

funcs2[2]()
funcs2[6]()
funcs2[8]()