function checkTrafficLight () {
    let cor = `verde`
    switch (cor){
        case `verde`: 
            console.log (`Pode atravessar a rua.`); 
            break;
        case `amarelo`:
            console.log (`Prepare-se para poder parar`)
            break;
        case `vermelho`:
            console.log (`Pare! Não atravesse a rua!`)
            break;
        default:
            console.log (`Cor invalida! Por gentileza, insira uma cor valida para continuar!.`)

    }
}

checkTrafficLight(`verde`);
//checkTrafficLight(`amarelo`);
//checkTrafficLight(`vermelho`);
//checkTrafficLight(`azul`);