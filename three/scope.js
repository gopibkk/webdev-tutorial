const myName = 'anthony';
const isTeaching = true;

if (isTeaching) {
  const insideIf = true;
  console.log(myName);
  console.log(insideIf);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

/** Can not see insideIf or i */
console.log(insideIf);
console.log(i);

function test(x) {
  console.log('inside test');
  console.log(x);
  console.log(myName);
  const inner = 'wat';
  console.log(inner);

  const anotherFunction = function () {
    console.log('inside another function');
    const lower = true;
    console.log(lower);
    console.log(inner);
  }
  anotherFunction();
}

test();

/** Do not have access to the variables below due to scoping rules. */
console.log(x);
console.log(inner);