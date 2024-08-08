// transforma a lista numa string

const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const lista2 = [{nome: 'Leo'}, {nome: 'Cleber'}, {nome: 'Luan'}]

console.log(lista2.map((e) => e.nome).join('; '))

console.log(lista1.join(';'))//teste