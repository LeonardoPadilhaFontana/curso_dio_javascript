class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }
    descrever() {
        console.log(`Meu nome é: ${this.nome} e minha idade é: ${this.idade} e nasci no ano de: ${this.anoDeNascimento}`);
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`)
    }else{
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`)
    }

}




const Leonardo = new Pessoa('Leonardo Padilha',28);
Leonardo.descrever();

const Jose = new Pessoa('Jose Padilha',25);
Jose.descrever();

compararPessoas(Leonardo, Jose)