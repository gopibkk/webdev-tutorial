const add = (x, y) => x + y;

console.log(1 + 1);
console.log(add(1, 2));
console.log('hello world!');
[5, 6, 7].forEach((num) => console.log(num));

console.log('**** Sync above, Async below ****');

console.log(10 + 10);
setTimeout(() => console.log(add(10, 20)), 500);
console.log('hello world!');
[50, 60, 70].forEach((num) => console.log(num));

/** Common misconception... callback function !== asynchronous code */
