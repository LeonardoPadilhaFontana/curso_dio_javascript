const objects = {
    nome:'Leonardo',
    idade: 28
};

objects['nome'] = 'Jose'
console.log(objects.nome);
console.log(objects['idade']);

objects.falar= function (){
    console.log('teste');
}

objects.falar();