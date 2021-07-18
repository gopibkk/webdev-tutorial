const myName = 'Anthony';
const sentence = 'This is a sentence about ' + myName + ' he is ' + getAge(1) + ' years old';

function getAge(x) {
  return 99 + x;
}

console.log(sentence);

const literalSentence = `This is a sentence about ${myName} he is ${getAge(1)} years old`;
console.log(literalSentence);
