const prompt = require('prompt-sync')();

let precoProduto = 120.00;
let desconto = precoProduto * 0.15;  
let precoComDesconto = precoProduto - desconto;
let custoEntrega = 10.00;
let precoFinal = precoComDesconto + custoEntrega;

console.log("Preço original: R$ " + precoProduto);
console.log("Desconto (15%): R$ " + desconto);
console.log("Preço com desconto: R$ " + precoComDesconto);
console.log("Custo de entrega: R$ " + custoEntrega);

console.log("TOTAL A PAGAR: R$ " + precoFinal);
