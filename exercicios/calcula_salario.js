const {gets, print} = require('./funcoes_auxiliares_ex3')

let salario = gets();
let beneficio = gets();

pctImpostos = calcula_percentual_impostos(salario);

let valor_a_transferir = calcular_valor_transf(salario, pctImpostos, beneficio)          

print('O valor a transferir é: ' + valor_a_transferir);


function calcula_percentual_impostos(salario){
let imposto = 0;    
    if (salario <= 1100){
        imposto = 0.5;
    }else if (salario <= 2500){
        imposto = 0.1;
    }else{
        imposto = 0.15;
    }
    return imposto;
}

function calcular_valor_transf(salario, pctImpostos, beneficio){
    let valor_a_transferir = (salario - (salario*pctImpostos) + beneficio);
    return valor_a_transferir
}