let peca = 'nada'.toLowerCase();

switch (peca) {
    case 'peão': console.log('Duas casas para frente')
break;
    case 'torre': console.log('Todas casas para frente e para trás');
break;
    case 'cavalo': console.log(' duas casas num sentido (vertical ou horizontal) e uma casa no outro sentido (horizontal ou vertical)');
break;
    case 'bispo': console.log('Todas casas na diagonal');
break;
    case 'rainha': console.log('Todas casas para qualquer lados');
break;
    case 'rei': console.log('Uma casa para frente, trás, direita e esquerda');
default:
    console.log('erro!');
break;
}