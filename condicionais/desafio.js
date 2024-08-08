let precoCombustivel = 0;
let gastoMedioCombustivel = 0;
let tipoCombustivel = 'A'; // A alcool G gasolina
let distanciaViagem = 1580;
let precoViagem = 0
let tipoValidoCombustivel = ((tipoCombustivel === 'A') || (tipoCombustivel === 'G'))
let litrosConsumidos = 0;

if (!tipoValidoCombustivel) {
    return console.log('Tipo invalido de combustível')
} else if (tipoCombustivel === 'A') {
    precoCombustivel = 3.68;
    gastoMedioCombustivel = 19;
} else if (tipoCombustivel === 'G') {
    precoCombustivel = 5.79;
    gastoMedioCombustivel = 12;
}

litrosConsumidos = (distanciaViagem / gastoMedioCombustivel)
precoViagem = (litrosConsumidos * precoCombustivel);

console.log(precoViagem.toFixed(2))





