
const notas = [9,3,5,1,6,4,8,9,10];
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