function soma(x) {
    return function(y) {
        return x + y;
    }
}

const somaParcial = soma(10) // armazena X ou parametro inicial e incrementa Y ou parametro ainda nao estabelicido

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))
console.log(somaParcial(50))
