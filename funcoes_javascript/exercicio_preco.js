
function calcularPreco(precoEtiqueta, formaPagamento){
        if(formaPagamento != 4){
            return precoEtiqueta - (precoEtiqueta * pegaPorcentagem(formaPagamento));
        }else {
            return precoEtiqueta + (precoEtiqueta * pegaPorcentagem(formaPagamento));
        }

    }

function pegaPorcentagem(formaPagamento){
    if (formaPagamento === 1 || formaPagamento === 4){
        return 0.1;
    }else if (formaPagamento === 2) {
        return 0.15;
    }else if (formaPagamento === 3){
        return 0;
    }

}

(function (){
    console.log('Valor total: ' + calcularPreco(100,3))
})();

function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
}

console.log(calcularMedia(5, 5));