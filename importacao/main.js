const {gets, print} = require('./funcoes_auxiliares')
let numerosSorteados = [];
let maiorNumero = 0;
for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorNumero){
        maiorNumero = numeroSorteado;
    }
}

print(maiorNumero);

