
const notas = [10,3,5,8,4,9,6,4,9,1,10];
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