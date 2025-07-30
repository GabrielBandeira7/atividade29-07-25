const prompt = require ('prompt-sync')();

let idade = Number(prompt("Insira a sua idade"));

if(idade<= 12){
  console.log("Criança");
}else if(idade < 18){
  console.log("Adolescente");
}else if(idade <= 64){
  console.log("Adulto");
}else if (idade > 64){
  console.log("Idoso");
} 
