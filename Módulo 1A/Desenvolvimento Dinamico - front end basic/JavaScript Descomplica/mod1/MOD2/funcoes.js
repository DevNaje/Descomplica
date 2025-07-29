// Definindo outra função regular com dois parametros
function soma(a, b) {
     return a + b;
}

// Chamando a função soma e armazenando o resultado em uma variavel
let resultado = soma (13, 29);

// Exibindo o resultado da função soma
console.log(`O resultado da soma é: ${resultado}`);
console.log(`O resultado da soma é: ${soma (13, 29)}`);

// Definindo uma funcao regular usando a palavra-chave `function`
function saudacao(nome) {
    console.log(`Ola, ${nome}!`)
}

// Chamando a funcao saudacao e passando um argumento
saudacao(`Ana Teixeira`);

// Definindo uma funcao regular sem paramentros e sem retorno
function mensagem() {
    console.log(`Esta e uma mensagem de boas vindas!`)
}
// Chamando a funcao mensagem
saudacao(`Ana`);
mensagem();