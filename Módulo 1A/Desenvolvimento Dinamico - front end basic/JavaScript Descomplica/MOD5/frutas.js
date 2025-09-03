let frutas = "maça, banana, laranja, uva, abacaxi";

console.log("Frutas: ", frutas);
console.log("Tamanho da string frutas:", frutas.length )

// queremos obter uma parte da string

let parteFrutas = frutas.slice(6,21)
console.log("Resultado do slice(): ", parteFrutas);

let frutaComEspaco = "          abacate            "


let frutaSemEspaco = frutaComEspaco.trim();
console.log("Resultado do trim():", frutaSemEspaco);

let listaDeFrutas = "maçã,banana,laranja,uva,abacaxi";

let arrayDeFrutas = listaDeFrutas.split(",");
console.log("Resultado do split():", arrayDeFrutas);

arrayDeFrutas.forEach