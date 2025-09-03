function verificarStatusDaCasa(casa) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = Math.random() > 0.5;
      if (sucesso) {
        resolve(
          `A casa localizada na ${casa.endereco} está em boas condições!`
        );
      } else {
        reject(`A casa localizada na ${casa.endereco} precisa de reparos.`);
      }
    }, 2000);
  });
}

class casa {
  constructor(endereco, cor, numQ, temGaragem) {
    this.cor = cor;
    this.numQ = numQ;
    this.temGaragem = temGaragem;
    this.endereco = endereco;
  }

  descrever() {
    let descricao = `Casa localizada em ${this.endereco} de cor ${this.cor}, possui ${this.numQ} quartos`;
    if (this.temGaragem) {
      descricao += ` e possui garagem.`;
    } else {
      descricao += ` e não possui garagem.`;
    }
    return descricao;
  }

  verificarStatus() {
    verificarStatusDaCasa(this)
      .then((resultado) => {
        console.log(resultado); // resultado positivo
      })
      .catch((erro) => {
        console.error(erro);
      });
  }
}

// Criação de um novo objeto
const minhaCasa = new casa(
  "Rua Adailton pereira, 123",
  "cimento queimado",
  3,
  true
);
// const casaDoVizinho = new casa ('rosa', 2, false);

console.log(minhaCasa.descrever());
// console.log(casaDoVizinho.descrever());

// Verificação do status da casa e exibição da descrição
minhaCasa.verificarStatus();

// Caso de falha
const casaInvalida = new casa("", 0, "verde", 2, false);
console.log(casaInvalida.descrever());
casaInvalida.verificarStatus();
