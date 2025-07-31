const prompt = require("prompt-sync");

function verificarMultiploDeTres(numero) {
    
    if (numero % 3 === 0) {
        console.log("É múltiplo de três");
    }else{
        console.log("Não é múltiplo de três");
    }
}

const numero = parseInt(prompt("Digite um número:"));
verificarMultiploDeTres(numero);
