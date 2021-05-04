const myName = 'Anthony';

console.log(myName.length);
console.log(myName[0]);

for (let i = 0; i < myName.length; i++) {
  const char = myName[i];
  console.log(char);
}

console.log(myName.indexOf('t'));
console.log(myName.indexOf('z'));

console.log(myName.slice(0, 3));

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

console.log(myName.replace('Ant', 'Mant'));
