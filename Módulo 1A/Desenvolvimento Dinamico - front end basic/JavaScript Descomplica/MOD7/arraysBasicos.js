// Criando um array inicial

let frutas = ['maçã', 'laranja', 'melância', 'morango', 'uva']; //postition 0 ... 4

console.log('Array incial: ' + frutas);
console.log('Comprimento do Array: ' + frutas.length);

// Usando método push() para adicionar elementos ao final do array
let novoComprimento = frutas.push('manga', 'abacaxi');
console.log('\nArray atualizado com push(): ' + frutas);
console.log('Comprimento do Array atualizado: ' + frutas.length);

// Usando o método pop() para remover o ultimo elemento

let ultimaFruta = frutas.pop();
console.log('\nArray atualizado com pop(): ' + frutas);
console.log('Comprimento do Array atualizado: ' + frutas.length);

// Usando o método shift() para remover o primeiro elemento do Array

let primeiraFruta = frutas.shift();
console.log('\nArray atualizado com shift(): ' + frutas);
console.log('Comprimento do Array atualizado: ' + frutas.length);