const numbers = [4, 5, 2, 3, 34, 8, 9, 4, 2, 12, 1];
console.log(numbers);

const isGreaterThan5 = function (number) {
  return number > 5;
}

const numbersGreaterThan5 = numbers.filter(isGreaterThan5);

console.log(numbersGreaterThan5);

Array.prototype.realFilter = function (cb) {
  const filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (cb(element)) {
      filteredArr.push(element)
    }
  }
  return filteredArr;
}

console.log(numbers.realFilter(isGreaterThan5));