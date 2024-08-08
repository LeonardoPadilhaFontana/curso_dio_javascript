const pessoa = { // objetos sao estruturas dinamicas de dados com chave e valor.
    nome: 'Leonardo Padilha',
    idade: 28,
    descrever: function (){
        console.log(`Meu nome é: ${this.nome} e minha idade é: ${this.idade}`);
    }
};

const atributo = 'idade';

console.log(pessoa[atributo])// acesso dinamico


pessoa['nome'] = 'teste';

pessoa.descrever();