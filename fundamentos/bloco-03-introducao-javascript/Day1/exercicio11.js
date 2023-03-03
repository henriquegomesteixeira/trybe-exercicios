let salarioBruto = 3000;
let inss;
let ir;

if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
} else {
    inss = 570.88;Day1-javascript-primeiros-passos;
}

let soma = salarioBruto - inss;

if (soma <= 1903.98) {
    ir = 0;
} else if (soma <= 2826.65) {
    ir = (soma * 0.075) - 142.80;
} else if (soma <= 3751.05) {
    ir = (soma * 0.15) - 354.80;
} else if (soma <= 4664.68) {
    ir = (soma * 0.225) - 636.13;
} else {
    ir = (soma * 0.275) - 869.36;
}

let total = soma - ir;


console.log('Seu INSS ' + inss);
console.log('Seu IR ' + ir);
console.log('Salário: ' + total);
