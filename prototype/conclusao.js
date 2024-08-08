function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meun nome é: ${this.nome}` )
}

const leonardo = {
    genero: 'M'
};
Pessoa.call(leonardo, 'Leonardo', 28)// cria o contexto sem puxar o prototype

console.log(leonardo)
