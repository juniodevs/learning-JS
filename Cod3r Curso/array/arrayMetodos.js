const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //último sai da lista
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona um no último
console.log(pilotos)

pilotos.shift() // Remove da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um primeiro elemento no array
console.log(pilotos)

// Splice pode aadicionar e remover elemtnso

// adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover

pilotos.splice(3, 1) // Massa saiu
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // Métodos Slice retorna um novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)