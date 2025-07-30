const prompt = require('prompt-sync')({ sigint: true });

function obterNumero(mensagem){
    let numero;
    while (true){
        const entrada = prompt(mensagem);
        numero = parseFloat(entrada);
        
        if (!isNaN(numero) && isFinite(entrada)) {
            break;
        }
        console.log('Por favor, digite um número válido.');
    }
    return numero;
}

console.log('=== Calculadora de Soma ===');
const numero1 = obterNumero('Digite o primeiro número: ');
const numero2 = obterNumero('Digite o segundo número: ');

const soma = numero1 + numero2;

console.log(`\nResultado: ${numero1} + ${numero2} = ${soma}`);

if (soma % 1 === 0) {
    console.log('O resultado é um número inteiro.');
} else {
    console.log('O resultado é um número decimal.');
}

if (soma > 100) {
    console.log('O resultado é maior que 100!');
} else if (soma < 0) {
    console.log('O resultado é negativo!');
} else {
    console.log('O resultado está entre 0 e 100.');
}
