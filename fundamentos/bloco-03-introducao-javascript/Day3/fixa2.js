let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function cliente(add) {
    if (typeof add === 'string') {
        clientesTrybeBank.push(add);
        console.log('É string')
    } else {
        console.log('Não é String');
    }
}

cliente('dudu');

console.log(clientesTrybeBank);