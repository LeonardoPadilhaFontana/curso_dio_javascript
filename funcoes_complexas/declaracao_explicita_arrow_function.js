

function funcao1() {
    console.log(this)
}


const funcao2 = () => {// arrow function nao possui o this(contexto)
    console.log(this)
}

const leo = {
    nome: 'leo',
    funcao1,
    funcao2
}

leo.funcao1()
leo.funcao2()