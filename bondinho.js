// Leitura dos dados de entrada
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").split("\n");

let a = parseInt(input[0]);
let m = parseInt(input[1]);

// Verifica se a soma de alunos e monitores cabe no bondinho
if (a + m <= 50) {
    console.log("S");
} else {
    console.log("N");
}
