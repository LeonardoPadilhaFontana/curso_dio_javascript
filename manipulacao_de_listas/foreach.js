const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// funciona como for passando por cada elemento apresentado numa lista
// e consideravelmente lento se passado por uma lista muito longa em comparacao
// com o for tradicional
// lista.forEach((value, i, listRef) => {
//     console.log(value, i, listRef)
// })

lista.forEach((value) => {
    console.log(value)
})