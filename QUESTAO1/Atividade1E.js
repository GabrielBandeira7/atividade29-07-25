const prompt = require ('prompt-sync')(); 

console.log("Vamos calcular o custo da sua viagem");
let km = prompt("Quantos quilômetros você vai viajar? ");
let kmPorLitro = prompt("Quantos quilômetros seu carro faz com 1 litro? ");
let preco = prompt("Qual o preço da gasolina? ");

let litrosNecessarios = km / kmPorLitro;
let valorTotal = litrosNecessarios * preco;

console.log("Você precisará de " + litrosNecessarios + " litros de gasolina");
console.log("O custo total será de R$ " + valorTotal);
