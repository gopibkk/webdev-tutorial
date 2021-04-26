const words = ['I', 'love', 'pizza'];

console.log(words[0]);
console.log(words.length);

words.push('!');

console.log('after push');
console.log(words);

words.pop();

console.log('after pop');
console.log(words)

words.unshift('Hey,');

console.log('after unshift');
console.log(words);

const str = words.join(' ');
console.log(str);

console.log('for');
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  console.log(word);
}

console.log('foreach');
words.forEach((word) => console.log(word));

console.log('for...of');
for (const word of words) {
  console.log(word);
}
