class Imovel {
    constructor(endereco, tamanho) {
        this._endereco = endereco;
        this._tamanho = tamanho;
    }
    get endereco() {
        this._endereco
    }
    set endereco (novoEndereco) {
        return this._endereco = novoEndereco;
    }
    get tamanho() {
        this._tamanho
    }
    set tamanho (novoTamanho) {
        return this._tamanho = novoTamanho;
    }

    descrever() {
        throw new Error('Este método deve ser implementado nas subclasses!');
    }

}

class Casa extends Imovel {
    constructor (endereco, tamanho, cor, numQuartos, temGaragem) {
        super(endereco, tamanho)
        this._cor = cor;
        this._numQuartos = numQuartos;
        this._temGaragem = temGaragem;
    }

    get cor() {
        this._cor
    }

    set cor (novaCor) {
        return this._novacor = novaCor;
    }

    get numQuartos () {
        this._numQuartos
    }

    set numQuartos (novoNumQuartos) {
        return this._novoNumQuartos = novoNumQuartos;
    }

    get temGaragem () {
        this._temGaragem
    }

    set temGaragem (novoTemGaragem) {
        return this.novoTemGaragem = novoTemGaragem
    }

    descrever() {
        let descricao = `Casa localizada na ${this._endereco}, de ${this._tamanho} metros quadrados, na cor ${this._cor}, com ${this._numQuartos} quartos`
         // operador ternário 
        descricao += this._temGaragem ? ` e possui garagem.` : ` e não possui garagem,`;
        return descricao;
    }
}


class Apartamento extends Imovel {
    constructor(endereco, tamanho, numDoAndar, possuiElevador) {
        super(endereco, tamanho);
        this._numDoAndar = numDoAndar;
        this._possuiElevador = possuiElevador;
    }

    get numDoAndar () {
        this._numDoAndar;
    }

    set numDoAndar(novoNumDoAndar) {
        return this._novoNumDoAndar = novoNumDoAndar;
    }

    get possuiElevador () {
        this._possuiElevador;
    }

    set possuiElevador(novoPossuiElevador){
        return this.novoPossuiElevador = novoPossuiElevador;
    }

    descrever() {
        let descricao = `Apartamento localizado na ${this._endereco}, com ${this._tamanho} metros quadrados, no ${this._numDoAndar} andar`;

        descricao += this._possuiElevador ? " e possui elevador." : " e não possui elevador.";
        return descricao;
    }
}
    // Função para descrever um imovel (polimorfismo)

    function descreverImovel(imovel) {
        console.log(imovel.descrever());
    }

    // criação de um novo objeto
    const minhaCasa = new Casa('Rua qualquer, 123', 53, 'cimento queimado', 3, true);
    const meuApartamento = new Apartamento('Rua qualquer 2, 321', 25, 8, true);

    // Manipulação dos objetos e exibição das descrições usando polimorfismo
    descreverImovel(minhaCasa);
    descreverImovel(meuApartamento);

    
    