class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const ant = new Person('Ant', 35);
const zach = new Person('Zach', 18);

ant.sayHi();
zach.sayHi();

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  tellMajor() {
    console.log(`${this.name} is studying ${this.major}`);
  }
}

const pete = new Student('Pete', 25, 'Aerospace Engineering');

pete.sayHi();
pete.tellMajor();
