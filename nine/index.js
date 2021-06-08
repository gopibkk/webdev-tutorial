const fs = require('fs');
const fsPromises = require('fs').promises;

console.log('before write file');

fs.writeFile('test.txt', 'Hello World!', (err) => {
  console.log('done writing to file');
});

// fs.writeFileSync('test.txt', 'Hello World!');

// fsPromises.writeFile('test.txt', 'Hello World!')
//   .then(() => console.log('done writing to file'));

console.log('after write file');

// async function run() {
//   console.log('before write file');

//   await fsPromises.writeFile('test.txt', 'Hello World!');
//   console.log('done writing to file');

//   console.log('after write file');
// }

// run();
