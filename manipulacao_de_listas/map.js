// o map le a lista e trata os elementos com base na funcao e retorna a mesma
// lista tratada no retorno da funcao

class Pessoa {
    constructor(name) {
        this.name=name
    }
}

const lista = [new Pessoa('Leo'),new Pessoa('Fabio'),new Pessoa('Cleber'),new Pessoa('Antonio')]

const listaNomes = lista.map((element) => element.name)

const listaNomesHTML = lista.map((element) => {
    return `
        <li>
            ${element.name}
        </li>
    `
})


console.log(listaNomes)
console.log(listaNomesHTML)