let fruits = [3, 4, 10, 1, 12];
let soma = 0;

for (let index = 0; index < fruits.length; index += 1) {
    soma += fruits[index];
    console.log(soma);
}

if (soma > 15) {
    console.log(soma);
} else {
    console.log('valor menor que 16');
}