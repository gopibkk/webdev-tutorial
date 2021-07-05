// Different way to access elements from an array
const food = ['pizza', 'burger', 'fries', 'ice cream'];
const [pizza, , , iceCream] = food;
console.log(pizza);
console.log(iceCream);

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

const { age } = person;
const { name: myName } = person;
console.log(age);

console.log(myName);

const { education: { highSchool: { name: highSchoolName } } } = person;
console.log(highSchoolName);

const sayHello = ({ name }) => console.log(`Hello from ${name}`);
sayHello(person);
