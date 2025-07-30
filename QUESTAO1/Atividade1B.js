const prompt = require("prompt-sync")();

let numeroA = Number(prompt("Digite o primeiro número:"));
let numeroB = Number(prompt("Digite o segundo número:"));

console.log("Números digitados:", numeroA, "e", numeroB);

// Operações matemáticas
console.log("Soma:", numeroA + numeroB);
console.log("Subtração:", numeroA - numeroB);
console.log("Multiplicação:", numeroA * numeroB);

// Verifica divisão por zero antes de calcular
if (numeroB === 0) {
  console.log("Divisão: Impossível dividir por zero!");
  console.log("Resto da divisão: Impossível calcular!");
} else {
  console.log("Divisão:", numeroA / numeroB);
  console.log("Resto da divisão:", numeroA % numeroB);
}
