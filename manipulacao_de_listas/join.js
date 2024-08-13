// transforma a lista numa string

const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const lista2 = [{nome: 'Leo'}, {nome: 'Cleber'}, {nome: 'Luan'}]

const elementosEmHtml = lista2
    .filter((e) => e.nome.startsWith('L'))
    .map(e => `<li>${e.nome}</li>`)
    .join('')

console.log(lista2.map((e) => e.nome).join('; '))

console.log(lista1.join(';'))//teste

console.log(elementosEmHtml)