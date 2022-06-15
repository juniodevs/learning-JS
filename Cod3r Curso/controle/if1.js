function BoaNoticia(nota) {
if(nota >= 7){
    console.log("Aprovado " + nota);
}
else{
    console.log("Não Aprovado")
}
}
BoaNoticia(8.1)
BoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    if (valor) {
        console.log('É verdade... '+ valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})