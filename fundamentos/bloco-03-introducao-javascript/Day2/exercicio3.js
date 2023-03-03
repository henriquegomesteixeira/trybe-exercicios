let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let divisor = [];

for (let i = 0; i < numbers.length; i+= 1) {
  if (numbers[i] % 2 !== 0) {
    divisor.push(numbers[i]);
  }
}

console.log("Os números ímpares na array são " + divisor);