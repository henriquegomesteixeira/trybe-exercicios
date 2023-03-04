let areaDoCirculo = (raio) => (
    typeof raio === 'number' ? `Areá do círculo: ${3.14 * (raio ** 2)}` : 'valor do raio incorreto!'
    
);

console.log(areaDoCirculo(5))

