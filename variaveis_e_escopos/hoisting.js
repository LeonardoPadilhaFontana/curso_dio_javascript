


// no javascript a order de declaracao é afetada pelo hoisting
// que joga as funcoes acima do arquivo
// hoisting joga as declaracoes mas nao as atribuicoes

teste1();// no exemplo ocorre erro no teste1 por que o hoisting puxa declaracao
teste2();// mas nao a atribuicao que ocorre no tempo de execucao normal

var teste1 = function teste(){
    console.log('teste1');
}

function teste2(){
    console.log('teste2');
}

