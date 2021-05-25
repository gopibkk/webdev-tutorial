const numbers = [4, 5, 2, 3, 34, 8, 9, 4, 2, 12, 1];
console.log(numbers);

const sum = numbers.reduce((accumulator, currentValue) => accumulator += currentValue, 0);
console.log(sum);
