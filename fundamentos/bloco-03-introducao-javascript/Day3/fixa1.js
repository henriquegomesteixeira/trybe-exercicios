let saldo = 100;

function valorSaldo(deposito) {
    return saldo + deposito;
}

console.log(valorSaldo(20));

function subitracao(retirada) {
    return saldo - retirada;
}

console.log(subitracao(40));

function multiplicacao(munti) {
    return saldo * munti;
}

console.log(multiplicacao(2));

function divisao(divi) {
    return saldo / divi;
}

console.log(divisao(2));