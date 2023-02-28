let custo = 1;
let valor = 3;

if (custo >= 0 & valor >= 0) {
    let imposto = custo * 0.2;
    let lucro = (valor - imposto) * 1000;
    console.log(lucro);
} else {
   console.log("Error, os valores não podem ser negativos!");
}
