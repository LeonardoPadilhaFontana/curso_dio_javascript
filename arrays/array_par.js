let numeros = []
for (let j = 0; j <= 10; j++) {
    numeros.push(j);
    
}

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0){
        console.log(numeros[i]);
    }
}