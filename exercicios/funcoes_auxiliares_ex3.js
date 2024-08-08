
const notas = [3463.9, 1000];
let i = 0;
function gets(){
    const valor = notas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}


module.exports = {gets, print}