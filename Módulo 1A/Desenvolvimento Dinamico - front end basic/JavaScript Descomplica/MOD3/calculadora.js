function calculadora(n1, n2) {
    let adição = n1 + n2;
    let subtração = n1 - n2;
    let multiplicacao = n1 * n2;
    let divisão = n1 / n2;
    let modulo = n1 % n2;
    let exponencial = n1 ** n2;

    // incremento e decremento
    // incremento do n1
    let incrementar = n1
    incrementar++;

    // decremento do n2
    let decrementar = n2
    decrementar--;

    //exibindo os valores no console

    console.log(`Adicão (${n1} + ${n2}) = ${adição}`);
    console.log(`Subtração (${n1} - ${n2}) = ${subtração}`);
    console.log(`Multiplicação (${n1}) * (${n2}) = ${multiplicacao}`);
    console.log(`Divisão (${n1}) / (${n2}) = ${divisão}`);
    console.log(`Módulo (${n1}) % (${n2}) = ${modulo}`);
    console.log(`Exponencial (${n1}) ** (${n2}) = ${exponencial}`);
    console.log(`Incremento de n1 (${n1}) = ${incrementar}`);
    console.log(`Decremento de n2 (${n2}) = ${decrementar}`);

    calculadora(10,5);
}