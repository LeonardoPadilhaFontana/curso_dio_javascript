const fs = require('fs')
const path = require('path')
// import fs from 'fs'
// import path from 'path'

const filePath = path.resolve(__dirname,'tarefas.csv')

const promessaDaLeituraDoArquivo = fs.promises.readFile(filePath)
// forma com melhoria sintatica para tratamento do texto
async function buscarArquivo() {
    try {
        const  arquivo  = await fs.promises.readFile(filePath)
        const textoDoArquivo = arquivo.toString('utf8')
        console.log(textoDoArquivo)
    } catch(error) {
        console.log(error)
    }finally {
            console.log('Fim')
    }
}

buscarArquivo()
// forma tradicional de tratamento
// promessaDaLeituraDoArquivo
//     .then((arquivo) => arquivo.toString('utf8'))
//     .then((textoCsvArquivo) => textoCsvArquivo.split('\n').slice(1))
//     .then((linhasSemCabecalho) => linhasSemCabecalho.map((linhasSemCabecalho) => {
//         const [nome, feito] = linhasSemCabecalho.split(';')
//         return {
//             nome,
//             feito: feito ==='true'
//         }
//     }))
//     .then((listaDeTarefas) => console.log(listaDeTarefas))
//     .catch((erro) => console.log('Invalid', erro))




