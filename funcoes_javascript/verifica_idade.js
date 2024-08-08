
function validaIdade(idade){
    if(idade < 18){
        return 'menor'
    }else{
        return 'maior'
    }
}


(function (){
    console.log(validaIdade(16) + ' de idade');
})()

