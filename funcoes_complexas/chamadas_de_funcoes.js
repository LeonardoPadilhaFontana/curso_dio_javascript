// invocacao direta
const Pessoa = {
    nome:'Leo',
    idade:30
}
function gritar(prefixo) {
    console.log(prefixo, this.nome)
}



// gritar('OLAAAAA') // NAO FUNCIONA POR CAUSO DO CONSOLE.LOG QUE NAO CHAMA UNDEFINED

gritar.apply(Pessoa /*contexto*/, ['OLAAA'])// Adiciona um array com os args da funcao ao contexto
gritar.call(Pessoa /*contexto*/, 'OLAAAAA') // adiciona parametros aos args da funcao ao contexto