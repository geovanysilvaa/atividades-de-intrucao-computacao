// Lendo a entrada do exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let X = parseInt(input.split("\n")[0])

// Seu código vai aqui
if(X>=1){
console.log('positivo');
}
if(X<0){
console.log('negativo');
}
if(X==0){
console.log('nulo');
}