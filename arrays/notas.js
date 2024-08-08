const notas = [];
let somaNotas = 0;
notas.push(6);
notas.push(7);
notas.push(8);
notas.push(7);
notas.push(6);

for (let x = 0; x < notas.length; x++) {
    somaNotas += notas[x];
    console.log(somaNotas);
}
console.log(somaNotas / notas.length);