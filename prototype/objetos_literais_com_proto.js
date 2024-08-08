const pessoa = {
    genero: 'M'
}

const leonardo = Object.create(pessoa)
leonardo.nome = 'Leonardo'

console.log(leonardo.genero)