// Criar um Arrays

let array1 = []
let array2 = new Array();
// array com elementos
let array3 = ['maçã', 'banana', 'melancia'];

console.log('Array 1', array1);
console.log('Array 2', array2);
console.log('Array 3', array3);
// Adicionando elementos

//array1 = ['teste'];
//array2 = ['teste2'];
//array3 = ['teste3'];


console.log('\nArray após adicionar elementos:', array1);
array1.push('Elemento1');
array2.push('Elemento2');
array3.push('Elemento3');

console.log('\nNovo Array 1', array1);
console.log('Novo Array 2', array2);
console.log('Novo Array 3', array3);

// Para acessar o elemento de um array

let primeiroElemento = array1[0];
let erro = array1[10]; // Posição inexistente 
let segundoElemento = array2[0];
let terceiroElemento = array3[2];

console.log('\nPrimeiro elemento:', primeiroElemento);
console.log('Elemento que não existe:', erro); // Ele irá jogar undefined
console.log('Segundo elemento:', segundoElemento);
console.log('Terceiro elemento:', terceiroElemento);

// Modificar elementos de um array

array1[0] = 'novoElemento';
console.log('\nArray após modificar o elemento:', array1);
