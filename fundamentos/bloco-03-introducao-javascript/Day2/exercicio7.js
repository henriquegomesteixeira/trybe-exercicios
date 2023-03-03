let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = '';

for (let index = 0; index < array.length; index += 1) {
    let palavra = array[index];
    if (palavra.length > maior.length) {
        maior = palavra;
    }
}

console.log(maior);