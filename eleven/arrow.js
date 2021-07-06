function add(x, y) {
  return x + y;
}

console.log(add(1, 2));

const anotherAdd = (x, y) => {
  return x + y;
}

console.log(anotherAdd(1, 2));

const finalAdd = (x, y) => x + y;

console.log(finalAdd(1, 2));

const sayHello = name => 'Hello ' + name;

console.log(sayHello('ant'));
