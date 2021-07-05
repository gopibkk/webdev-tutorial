// var keyword is function scoped

var myName = 'anthony';
console.log(myName);

function run(a) {
  console.log(a);
  console.log(myName);
  var b = 2;
  console.log(b)
}

run(1);

// console.log(a);
// console.log(b);

const dontChangeMe = 100;
// dontChangeMe = 99;
console.log(dontChangeMe);

let changeMe = 900;
changeMe = 999;
console.log(changeMe);

// let and const are block scoped

if (changeMe === 999) {
  const hungry = true;
  console.log(hungry);
}

// console.log(hungry);
