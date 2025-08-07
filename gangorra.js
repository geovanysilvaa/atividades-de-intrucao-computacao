const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let valores = input.split(" ");

let P1 = +valores[0];
let C1 = +valores[1];
let P2 = +valores[2];
let C2 = +valores[3];

let ladoEsquerdo = P1 * C1;
let ladoDireito = P2 * C2;

if (ladoEsquerdo == ladoDireito) {
    console.log(0);
} else if (ladoEsquerdo > ladoDireito) {
    console.log(-1);
} else {
    console.log(1);
}
