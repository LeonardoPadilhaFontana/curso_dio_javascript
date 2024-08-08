function calculaImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificaImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc <= 25) {
        return 'Peso normal';
    } else if (imc <= 30) {
        return 'Acima do peso';
    } else if (imc <= 40) {
        return 'Obeso';
    } else if (imc > 40) {
        return 'Obesidade grave';
    }
}
// main
(function () {
    let peso = 84;
    let altura = 1.74;
    let imc = calculaImc(peso, altura);
    console.log(classificaImc(imc));
})(); // funcao imediatamente invocado -- chamada apos a execucao



