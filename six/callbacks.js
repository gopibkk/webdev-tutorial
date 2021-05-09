function addHello(name, cb) {
  const helloMessage = `Hello ${name}!`;
  cb(helloMessage);
}

addHello('Anthony', function (message) {
  console.log(message);
});

setTimeout(() => console.log('2 seconds later'), 2000);

const arrayCallback = (element, index) => {
  console.log(`element: ${element}`);
  console.log(`index: ${index}`);
}

const numbers = [2, 6, 5, 3, 6, 7, 8, 1];
console.log(numbers);

console.log('----for loop----');
for (let i = 0; i < numbers.length; i++) {
  arrayCallback(numbers[i], i);
}
console.log('---foreach----');
numbers.forEach(arrayCallback);