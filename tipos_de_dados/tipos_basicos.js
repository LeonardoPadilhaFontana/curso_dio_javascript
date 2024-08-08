// const Decimal = require('decimal.js');

// import Decimal from 'decimal.js';

// import {Decimal} from 'decimal.js';
/*
boolean
null
undefined
number
string
symbol
object
*/
// variaveis primitivas sao imutaveis, sempre criam outro objeto e nao alteram o mesmo
// let x = 10;
// x = 'texto'

//wrappers sao encapsulamentos de objetos dos tipos primitivos

// boolean true false
// const nome = '';
// if (nome) { // variaveis vazias sao convertidas para false
//     console.log('fez')
// }

// null - ausencia de valor

// const y = null;
// let x; // undefined ausencia de declaracao
// console.log(y);

// numbers - todos os tipos numericos sao numbers /numeros decimais infinity -infinity e NaN
// double precision 64-bit binary format IEE 754 - gera falhas de arredondamento
// x = new Decimal(123.4567) //-0.19999999999999998 lixo gerado
// const v = new Decimal(0.1);
// console.log(x);


// strings conjunto de caracteres
// 'texto' //textos normais 
// "texto" // textos concatenando
// `${texto}` // recebe variaveis
// const  texto = 'a';
// console.log(`<div id="${texto}">teste</div>`)

// symbol
// objeto imutavel unico
const x = Symbol('10');
const y = Symbol('10');
console.log(x === y)// false symbol e unico na memoria do programa