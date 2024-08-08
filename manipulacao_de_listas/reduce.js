// o reduce recebe os valores anteriores e atuais e transforma a lista num valor só
// podendo passar no segundo parametro o valor inicial para evitar erros com listas
// vazias
// const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const lista = []
const somaListaReduce = lista.reduce((previous, current) => {
    return previous + current;
}, 0);

console.log(somaListaReduce);