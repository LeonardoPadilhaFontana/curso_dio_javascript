const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// funcao que cria uma nova lista baseada na regra apontada na function passada
//como parametro

const listaDeNumerosPares = lista.filter((element) => {
    return element % 2 === 0
})
console.log(lista)
console.log(listaDeNumerosPares)