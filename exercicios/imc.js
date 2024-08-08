let peso = 82;
let altura = 1.74;
let alturaQuadrado = Math.pow(altura,2);
let imc = (peso / alturaQuadrado)
console.log(imc)

if(imc < 18.5){
    console.log('Abaixo do peso')
} else if (imc <= 25){
    console.log('Peso normal')
}  else if (imc <= 30){
    console.log('Acima do peso')
} else if (imc <= 40){
    console.log('Obeso')
} else if (imc > 40){
    console.log('Obesidade grave')
}





