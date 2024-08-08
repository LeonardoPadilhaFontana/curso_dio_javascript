const pessoa = {
    idade: 28
};

const Leonardo = {
    nome:'Leonardo Padilha',
    idade:29,//se ja existe ele usa a ordem normal que e objeto depois prototype
    __proto__: pessoa
}


console.log(Leonardo.idade);
