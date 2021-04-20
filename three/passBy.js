const passByTest = (x, p, a) => {
  x = x * 2;
  p.name = 'pete';
  a = { type: 'cat' };
}

const num = 2;
const person = { name: 'ant' };
const animal = { type: 'dog' };

passByTest(num, person, animal);

console.log(num);
console.log(person);
console.log(animal);
