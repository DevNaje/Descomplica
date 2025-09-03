class casa {

    constructor (cor, numQ, temGaragem) {
        this.cor = cor;
        this.numQ = numQ;
        this.temGaragem = temGaragem;
    }

    descrever () {
        let descricao = `Esta casa é da cor ${this.cor}, possui ${this.numQ} quartos`
        if (this.temGaragem) {
            descricao += ` e tem garagem`
        } else {
            descricao += ` e não tem garagem`
        }
        return descricao;
    }
}


// Criação de um novo objeto 
const minhaCasa = new casa ('cimento queimado', 3, true);
const casaDoVizinho = new casa ('rosa', 2, false);

console.log(minhaCasa.descrever());
console.log(casaDoVizinho.descrever());


class Humano {

    constructor (sexualidade, idade, bonito) {
        this.sexualidade = sexualidade;
        this.idade = idade;
        this.bonito = bonito;
    }
        beberagua() {
            return `esta bebendo água`;
        }

        descrever() {
            let descricao1 =  `é ${this.sexualidade}, possui ${this.idade} anos `
            if (this.bonito) {
                descricao1 += 'e é muito gato, meu Deus!'
            } else {
                descricao1 += 'e é um avestruz de feio, misericórdia!'
            }
            return descricao1;
        }
}

const lucas = new Humano ('Hétero Sexual', '20', true);
const gustavo = new Humano ('Cis', '22', false);


console.log('\nO Lucas', lucas.beberagua());
console.log('O Lucas', lucas.descrever());
console.log('\nO gustavo', gustavo.beberagua());
console.log('O gustavo', gustavo.descrever());