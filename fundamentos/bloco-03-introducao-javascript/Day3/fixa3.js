let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function cliente(add) {
    if (typeof add === 'string') {
        console.log('É string')
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
        if (add === clientesTrybeBank[index]) {
            clientesTrybeBank.splice(index, 1);
        }
        
    }
    } else {
        console.log('Não é String');
    }
}

cliente('Gus');

console.log(clientesTrybeBank);