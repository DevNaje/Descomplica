function saudacao(){
    console.log("Olá, mundo!");
}

function novaSaudacao(Nome){
    console.log("Olá", Nome + ", seja muito bem vindo!");
}

function soma(a, b){
    return a + b;
}

// Exemplo de chamada das funções:
saudacao();
novaSaudacao("Lucas");
novaSaudacao("Maria");
novaSaudacao("João");
console.log("O resultado da soma entre", 5, "e", 16, "é:", soma(5, 16));