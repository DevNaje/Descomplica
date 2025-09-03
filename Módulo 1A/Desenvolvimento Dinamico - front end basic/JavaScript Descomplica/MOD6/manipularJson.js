let pessoa = {
    "nome": "Lucas",
    "idade": 21,
    "endereco": {
        "rua": "Rua principal",
        "numero": 123
    },
    "telefones": ["99916-6287", "99977-3451"] 
};

console.log(pessoa);

// Acessar dados
console.log("\nAcessar dados:");
console.log(pessoa.nome);
console.log(pessoa["idade"]);
console.log(pessoa.endereco.rua);
console.log(pessoa["telefones"][0]);
console.log(pessoa["telefones"][1]);

// Adicionar dados

console.log("\nAdicionar Dados:");
pessoa.email = "email.example@gmail.com";
console.log(pessoa);


// Modificar dados

console.log("\nModificar dados:");
pessoa.idade = 31;
pessoa.endereco.rua = "Rua 2 de agosto";


// Remover Dados
console.log("\nRemover dados:");
delete pessoa.telefones;
console.log(pessoa);

// Operações com Arrays

console.log("\nOperações com Arrys:");
pessoa.hobbies = ["esportes", "jogos", "leitura"];
console.log (pessoa.hobbies)
console.log(pessoa.hobbies[1]);
pessoa.hobbies.push("viagens");
console.log(pessoa.hobbies);

