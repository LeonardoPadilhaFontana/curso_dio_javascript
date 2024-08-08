let precoCombustivel = 0;
class Carro {
    marca;
    cor;
    tipoCombustivel;
    gastoMedioCombustivelPorKm;
    distanciaViagem;
    constructor(marca, cor, tipoCombustivel, gastoMedioCombustivelPorKm, distanciaViagem) {
        this.marca = marca;
        this.cor = cor;
        this.tipoCombustivel = tipoCombustivel;
        this.gastoMedioCombustivelPorKm = gastoMedioCombustivelPorKm;
        this.distanciaViagem = distanciaViagem;
    }
    calcularValorPercurso(distancia, valorCombustivel) {
        return ((distancia * this.gastoMedioCombustivelPorKm) * valorCombustivel);
    }
};

let Corsa = new Carro('Fiat', 'Azul', 'A', 1/8, 150);
console.log(Corsa.calcularValorPercurso(100, 6.25).toFixed(2));

let Fusca = new Carro('WolksWagen', 'Branco', 'G', 1/6, 150);
console.log(Fusca.calcularValorPercurso(100, 6.25).toFixed(2));
