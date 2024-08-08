
const notas = [5.5,7.1,2.3,9.2,8.4];
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