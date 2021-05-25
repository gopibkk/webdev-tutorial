const numbers = [4, 5, 2, 3, 34, 8, 9, 4, 2, 12, 1];
console.log(numbers);

const multiplyByTwo = function (number) {
  return number * 2;
}

const numbersDoubled = numbers.map(multiplyByTwo);

console.log(numbersDoubled);

Array.prototype.realMap = function (cb) {
  const mappedArr = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    mappedArr.push(cb(element));
  }
  return mappedArr;
}

console.log(numbers.realMap(multiplyByTwo));
