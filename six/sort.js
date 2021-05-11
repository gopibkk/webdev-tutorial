const numbers = [4, 5, 2, 3, 34, 8, 9, 4, 2, 12, 1];
console.log(numbers);

const sortedAsString = numbers.sort();
console.log(sortedAsString);

const sortedAsNumbers = numbers.sort((a, b) => a - b);
console.log(sortedAsNumbers);