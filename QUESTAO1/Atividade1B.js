const prompt = require("prompt-sync")();

let numeroA = 3; Number(prompt("Digite um numero: "));
let numeroB = 5; Number(prompt("Digite um numero:"));

console.log(numeroA + numeroB);

console.log("A soma entre os numeros e: ", numeroA + numeroB);

if(numeroB === 0){
    console.log("impossivel dividir por zero!");
}else{
    console.log("A divisao entre os numeros é: ", divisao);
}