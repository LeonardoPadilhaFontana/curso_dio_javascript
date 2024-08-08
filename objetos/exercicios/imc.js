

class Pessoa {
    nome;
    peso;
    altura;
    constructor(nome, peso, altura){
        this.nome   = nome;
        this.peso   = peso;
        this.altura = altura;
    }
    calcularImc(){
        return this.peso / Math.pow(this.altura,2);
    }
    classificarImc(){
        let imc = this.calcularImc()
        if(imc < 18.5){
            return 'Abaixo do peso';
        } else if (imc <= 25){
            return 'Peso normal';
        }  else if (imc <= 30){
            return 'Acima do peso';
        } else if (imc <= 40){
            return 'Obeso';
        } else if (imc > 40){
            return 'Obesidade grave';
        }        
    }
}


let Jose = new Pessoa('Jose',70, 1.75)
console.log(Jose.classificarImc());



/*

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
*/