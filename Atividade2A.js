const prompt = require("prompt-sync")();    

let nota1;
let nota2;
let nota3;
let media;

console.log("Insira a sua primeira nota: ", nota1);
console.log("Insira a sua primeira nota: ", nota2);
console.log("Insira a sua primeira nota: ", nota3);

media = (nota1 + nota2 + nota3) / 3;

if(media >= 7){
    console.log("Aprovado!");
}else{
    console.log("Reprovado!");  
}
