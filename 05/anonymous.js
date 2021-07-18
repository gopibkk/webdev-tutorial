setTimeout(function () {
  console.log('hi!')
}, 1000);

const helloWorld = () => console.log('hello world!');
setTimeout(helloWorld, 2000);

(function () {
  console.log('i have no name');
})();

const dog = {
  name: 'grace',
  speak: function () {
    console.log(`${this.name} says woof`);
  }
};

dog.speak();

const cat = {
  name: 'nala',
  speak: () => {
    console.log(`${this.name} says meow`);
  }
};

cat.speak();
