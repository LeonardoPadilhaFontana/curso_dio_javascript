
// em javascript a maior parte das funcoes sao objetos entao
//possuem prototipos e os mesmos podem ser mudados ou adicionadas
//funcoes
String.prototype.toPlang = function() {
    return `P${this}`
}

console.log('teste'.toPlang());

