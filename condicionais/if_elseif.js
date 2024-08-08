let numero = 1 // atribuicao
let numeroPar = (numero % 2) === 0;


if (numero === 0){
    console.log('Numero inválido');
    }else if (numero > 100){
        console.log('Numero deve ser abaixo de 100');
    }else if (numeroPar) {
    console.log('Par');
    }else{
    console.log('Impar');
}