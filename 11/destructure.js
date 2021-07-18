// Different way to access elements from an array
const food = ['pizza', 'burger', 'fries', 'ice cream'];
const pizza = food[0];
console.log(pizza);
const [p, , , i] = food;
console.log(p);
console.log(i);

// Different way to access elements from an object
const person = {
  name: 'Anthony',
  hobbies: ['reading', 'video games'],
  age: 99,
  education: {
    highSchool: {
      name: 'hogwarts',
      graduated: true,
    },
    college: {
      name: 'MIT',
      graduated: true,
    }
  }
};
const person2 = {
  name: 'Bruno'
};

const { age } = person;
const { name: myName } = person;

console.log(age);
console.log(myName);

console.log(person.education.highSchool.name);

const { education: { highSchool: { name: highSchoolName } } } = person;
console.log(highSchoolName);

const sayHello = ({ name }) => console.log(`Hello from ${name}`);
sayHello(person);
sayHello(person2);
