let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let vari = 1000;

for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < vari) {
      vari = numbers[i];  
    }  
}

console.log(vari);