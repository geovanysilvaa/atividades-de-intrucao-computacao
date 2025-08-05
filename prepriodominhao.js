const fs = require("fs");
const input = fs.readFileSync(0, "utf8").split("\n");

let N = +input[0]; 
let soma = 0;
let dias = 0;

for (let i = 1; i <= N; i++) {
    soma += +input[i];
    dias++;

    if (soma >= 1000000) {
        console.log(dias);
        break;
    }
}
