const myName = 'Anthony';
const sentence = 'This is a sentenct about ' + myName + ' he is ' + getAge() + ' years old';

function getAge() {
  return 99;
}

console.log(sentence);

const literalSentence = `This is a sentenct about ${myName} he is ${getAge()} years old`;
console.log(literalSentence);
