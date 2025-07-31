const prompt = require("prompt-sync")();

let valor_total = 0;
let numero_clientes = Number(prompt("Quantos clientes realizaram o pagamnento:"));

for (let i = 0; i < numero_clientes; i++) {
    valor_total += Number(prompt("Digite o valor da conta R$"));
}
console.log("Valor total das contas R$",valor_total.toFixed(2));
