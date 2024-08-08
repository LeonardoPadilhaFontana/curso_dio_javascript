 function falarMeuNome() {
    console.log('Meu nome Leonardo')
 }

function falarMeuNomeCompleto(falarMeuNome) {// passar funcao por parametro
    falarMeuNome()
    console.log('Padilha')
    return falarMeuNome // retornando funcao
}

falarMeuNomeCompleto(falarMeuNome)()

// function declaration
function nomeDaFuncao() { // nomeando a funcao // sofre hoisting sendo jogada pra cima
    console.log('a')
}
// function expression
const nomeDeOutraFuncao = function () { // atribuindo a funcao sem nome // atribuicao e jogada pra cima mas a funcao e mantida na ordem
    console.log('b')
}
nomeDaFuncao()
nomeDeOutraFuncao()
