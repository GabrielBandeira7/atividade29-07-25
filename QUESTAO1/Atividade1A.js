const prompt = require("prompt-sync")();

let nome;
let idade;
let altura;

nome = prompt("Digite seu nome: ");
idade = prompt("Digite a sua idade: ");
altura = prompt("Digite a sua altura: ");

console.log("Meu nome é", nome, "tenho", idade, "e", altura, "metros de altura");
