var var1 = 'teste';// vaza escopos devido ao hoisting


if (true) {
    var var1 = 10; // aqui a declaracao de variavel e jogada para cima pelo hoisting
    //exceto o escopo de funcoes onde o comportamento nao ocorre
}
console.log(var1);


function teste1() {
    var var2 = 10;// nesse caso 
}

//console.log(var2);
teste1();

if (true) {
    let var3 = 10; // fica preso no escopo da declaracao o hoisting so puxa ate o inicio do escopo

}
console.log(var3);

if (true){
    const var4 = 10; // const e o mesmo que o let nao podendo ser alterado
    var4 = 11; // nao funciona pois const nao e alteravel
}

