const {gets, print} = require('./funcoes_auxiliares_ex2')
let numeros = []
let maiorPar   = null;
let menorImpar = null;
const n = gets()
for (let i = 0; i < n; i++) {
    numeros.push(gets());
}

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i]%2===0){
        if (maiorPar === null || numeros[i] > maiorPar){
            maiorPar = numeros[i];
        }
    }else{
        if(menorImpar === null || numeros[i] < menorImpar){
            menorImpar = numeros[i];
        }
    }
    
}
print(numeros);
print(menorImpar);
print(maiorPar);
