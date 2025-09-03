class Casa {

    constructor (cor, numQ, temGaragem) {
        this._cor = cor;
        this._numQ = numQ;
        this._temGaragem = temGaragem;
    }

    get cor() {
        this._cor;
    }

    set cor(novaCor) {
        this._cor = novaCor;
    }

    get numQ() {
        return this._numQ;
    }

    set numQ(novoNumQ) {
        this._numQ = novoNumQ;
    }

    get temGaragem() {
        return this._temGaragem;
    }

    set temGaragem(novoTemGaragem) {
        this._temGaragem = novoTemGaragem;
    }

    descrever () {
        let descricao = `Esta casa é da cor ${this._cor}, possui ${this._numQ} quartos`
        if (this._temGaragem) {
            descricao += ` e tem garagem`
        } else {
            descricao += ` e não tem garagem`
        }
        return descricao;
    }
}


// Criação de um novo objeto 
// const minhaCasa = new casa ('cimento queimado', 3, true);
const casaDoVizinho = new Casa ('rosa', 2, false);

//console.log(minhaCasa.descrever());
console.log(casaDoVizinho.descrever());



// Classe DERIVADA ´´Casa Luxuosa´´ que herda de casa


class CasaLuxuosa extends Casa {
    constructor(cor, numQ, temGaragem, temPiscina) {
    super(cor, numQ, temGaragem);
    this._temPscina = temPiscina;
    }

    get temPiscina() {
        return this._temPiscina;
    }

    set temPiscina(novoTemPiscina) {
        this._temPiscina = novoTemPiscina;
    }

    descrever() {
        let descricao = super.descrever();
        if (this._novoTemPiscina) {
            descricao += ` também tem piscina.`
        } else {
            descricao += ` não tem piscina.`
        }
        return descricao;
    }
}

    const minhaCasa = new Casa('cimento queimado', 3, true);
    const casaLuxuosa = new CasaLuxuosa('bege', 4, true, true);

    console.log(minhaCasa.descrever());
    console.log(casaLuxuosa.descrever());