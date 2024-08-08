// prototipos sao bases para os objetos
// formam herancas de valores que serao herdados pelos filhos
//usando a tag __proto__

const pessoa = {
    genero: 'Masculino'
};

const leonardo = {
    nome: 'Leonardo',
    idade: 28,
    __proto__: pessoa// extende pessoa assim procura na classe o valor e se nao
    //encontra procura no objeto pai
}


console.log(leonardo.genero);

