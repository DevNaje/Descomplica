let animal1 = 'Elefante';
let animal2 = 'Girafa';
let animal3 = 'Zebra';

let parteAnimal1 = animal1.substring(3, 7);
console.log('Resultado substring():', parteAnimal1);

let NovoAnimal2 = animal2.replace('ra', 're');
console.log('Resultado substring():', NovoAnimal2);

let todosAnimais = animal1.concat(' ', animal2, ' ', animal3);

console.log('Resultado concat():', todosAnimais);
