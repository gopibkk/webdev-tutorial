/**
 * Two major parts to a function
 * 1. definition
 * 2. execution
 */

function addFirst(x, y) {
  return x + y;
}

const addSecond = function (x, y) {
  return x + y;
}

const addThird = (x, y) => {
  return x + y;
}

const addFourth = (x, y) => x + y;

console.log(addFirst(5, 4));
console.log(addSecond(5, 4));
console.log(addThird(5, 4));
console.log(addFourth(5, 4));