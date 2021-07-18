console.log(this);

function hello() {
  console.log(this);
  console.log('hello');
}

const obj = {
  name: 'object 1',
  method: function () {
    console.log(this);
    console.log(this.name);
  }
};

obj.method();
